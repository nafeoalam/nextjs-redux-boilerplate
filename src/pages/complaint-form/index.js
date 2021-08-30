import Head from 'next/head';
import React from 'react';
import { fetchcomplaintsPolicy } from 'src/api/routes/staticpages.api';

const ComplaintForm = ({ complain_content }) => {
    const { content, yoast_head } = complain_content
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    return (
        <div>
            <Head>
                { yoast_head?.yoast_head }
            </Head>
            <div
                dangerouslySetInnerHTML={createHTML(
                    content?.rendered
                )}
            ></div>

        </div>
    );
}


export const getStaticProps = async (context) => {
    try {
        const { data } = await fetchcomplaintsPolicy();
        return { props: { complain_content: data[0] } }
    } catch (error) {
        return { props: { complain_content: {} } }
    }
}


export default ComplaintForm;
