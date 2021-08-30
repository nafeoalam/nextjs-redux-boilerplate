import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'
import parse from 'html-react-parser';
import * as api from 'src/api/routes/courses.api';

import CourseItemBlock from "src/Components/CourseItem/_CourseItemBlock";

import SeoResponse from "public/assets/json_data/seo_response.json";
import UtilityHelper from 'src/shared/_Helper/utility.helper';

export const getStaticPaths = async () => {
    const { data: courses } = await api.fetchAllCourses();
    try {
        const paths = courses.data.map(course => {
            return {
                params: { courseSlug: course.slug }
            }
        })
        return {
            paths,
            fallback: true
        }
    } catch (error) {
        return {
            paths: [{}],
            fallback: true
        }
    }
}

export const getStaticProps = async (context) => {
    try {
        const { data: course } = await api.getPublicCourse(context.params.courseSlug);
        //const seoString = UtilityHelper.transforSeoHtml(SeoResponse.yoast_head)
        const seoString = SeoResponse.yoast_head;

        return { props: { course: course, seoString: seoString } }
    } catch (error) {

        return { props: { course: {}, seoString: '' } }
    }
}

const CourseDetails = ({ course, seoString }) => {
    let fullHeadHtml = '';
    if (seoString) fullHeadHtml = parse(seoString);
    const router = useRouter()

    const { courseSlug } = router.query
    return (
        <>
            <Head>
                {fullHeadHtml}
            </Head>
            {/* <Head>
                <title>{course ? course.post_title : 'N/A'}</title>
                <meta key="description" name="description" content="One Education offers professional courses for learners of all skill levels, wherever they are in the world. Explore courses and get certified" />
                <meta name='keywords' content={course ? course.post_title : 'N/A'} />
            </Head> */}
            <CourseItemBlock course={course} courseSlug={courseSlug} />
        </>
    );
}


export default CourseDetails;
