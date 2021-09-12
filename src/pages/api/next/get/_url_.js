
import { API_URL } from "src/_endpoints/config/config.axios"

import {
    getSession
} from 'next-auth/client';

export default async function (req, res) {
    try {
        const session = await getSession({ req })
        if (!session) {
            res.status(403).json({ message: "Not Authorized" });
            return;
        }

        const { slugValue, user_id, course_id } = req.body;
        const { url } = req.query
        const { data } = await API_URL.get(url, {
            headers: {
                AuthSecret: process.env.BACKEND_AUTH_SECRET_KEY,
            },
            params: {
                slug: slugValue ? slugValue : undefined,
                user_id: user_id ? user_id : undefined,
                course_id: course_id ? course_id : undefined,
            }
        })
        res.status(200).json(data);
    } catch (error) {
        // const { status, data } = error.response;
        res.status(400).json(error);
    }

}