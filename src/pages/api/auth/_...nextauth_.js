import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { login } from "src/api/routes/auth.api";
import FormData from "form-data";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "text", placeholder: "john@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials
                const loginFormData = new FormData();

                loginFormData.append("email", username);
                loginFormData.append("password", password);
                const res = await fetch("https://oe.zubairhasan.com//wp-json/oe/login", {
                    method: 'POST',
                    body: loginFormData,
                    headers: {
                        "AuthSecret": process.env.BACKEND_AUTH_SECRET_KEY
                    }
                })
                const { user } = await res.json()

                // // If no error and we have user data, return it
                if (user && user.user_email) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    pages: {
        signIn: "/auth/login",
    },
    session: {
        jwt: true,
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    // secret: process.env.AUTH_SECRET,
    // jwt: {
    //     signingKey: process.env.JWT_SECRET
    // },
    callbacks: {
        async signIn(user, account, profile) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async session(session, token) {
            return session
        },
        async jwt(token, user, account, profile, isNewUser) {

            // console.log(
            //     "jwt token",
            //     token,
            //     "jwt user",
            //     user,
            //     "jwt account",
            //     account,
            //     "jwt profile",
            //     profile,
            //     "jwt isNewUser",
            //     isNewUser
            // );

            if (user) {
                token.name = user.user_nicename
                token.email = user.user_email
                token.picture = user.user_avatar
            }

            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token
        }
    }

})

