import Head from 'next/head';
import React from 'react';
import { fetchAbout } from 'src/api/routes/staticpages.api';
import StaticPage from 'src/shared/StaticPages/StaticPage';


const About = ({ about_content }) => {
    const { content, yoast_head } = about_content

    return (
        <>
            <Head>
                {yoast_head}
            </Head>
            <StaticPage pageContent={content} />

        </>
    );
}


export const getStaticProps = async (context) => {
    try {
        const { data } = await fetchAbout();
        return { props: { about_content: data[0] } }
    } catch (error) {
        return { props: { about_content: {} } }
    }
}


export default About;
