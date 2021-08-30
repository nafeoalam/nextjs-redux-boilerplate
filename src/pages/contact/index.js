import Head from 'next/head';
import React from 'react';
import { fetchContact } from 'src/api/routes/staticpages.api';

const Contact = ({ contact_content }) => {
    const { content, yoast_head } = contact_content
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    return (
        <div>
            <Head>
                {yoast_head}
            </Head>
            <div
                dangerouslySetInnerHTML={createHTML(
                    content.rendered
                )}
            ></div>
        </div>
    );
}


export const getStaticProps = async (context) => {
    try {
        const { data } = await fetchContact();
        return { props: { contact_content: data[0] } }
    } catch (error) {
        return { props: { contact_content: {} } }
    }
}


export default Contact;
