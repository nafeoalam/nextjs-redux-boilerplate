import { useRouter } from "next/router"
import React from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import styles from "./Layout.module.css"

const Layout = ({ children }) => {
    const router = useRouter()
    const currentURL = (router.pathname).toLowerCase();

    return (
        <>
            <>
                <Navbar />
                <div className={styles.pageLayout}>
                    {children}
                </div>
            </>
            {!currentURL.includes('/auth/sign') && <Footer />}

        </>

    )
}

export default Layout
