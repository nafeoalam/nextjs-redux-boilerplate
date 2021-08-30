import React, { useEffect } from 'react'
import EnrolmentBox from "src/Components/CourseItem/EnrolmentBox";
import PartnerLogoCollection from "src/Components/CourseItem/PartnerLogoCollection";
import CourseOverview from "src/Components/CourseItem/CourseOverview";
import WebinarRequirements from "src/Components/CourseItem/WebinarRequirements";

import CourseContent from "src/Components/CourseItem/CourseContent/CourseContent";

import HowItWorks from "src/Components/CourseItem/HowItWorks/HowItWorks";
import RecognizedCertificate from "src/Components/CourseItem/RecognizedCertificate";
import FAQ from "src/Components/CourseItem/FAQ/FAQ";
import SingleCourseHero from 'src/Components/CourseItem/SingleCourseHero';
import Grid from '@material-ui/core/Grid';
import CourseReview from './CourseReview/CourseReview';
import { Container } from '@material-ui/core';
import RelatedCourses from './RelatedCourses';
import { useState } from 'react';

const CourseItemBlock = ({ course, courseSlug }) => {
    const [relatedCourses, setRelatedCourses] = useState([])
    const [reviews, setReviews] = useState([])
    const [courseModule, setCourseModule] = useState([])
    const [courseInfo, setCourseInfo] = useState({

    })
    useEffect(() => {
        setCourseInfo({
            title: course?.data?.title,
            overview: course?.data?.overview_content,
            featured_image: course?.data?.thumbnail,
            course_student: course?.data?.student_count,
            total_lesson: course?.data?.unit_count,
            total_module: course?.data?.curriculum?.length,
            reviews_count: course?.data?.review_count,
            rating: course?.data?.average_rating,
            excerpt: course?.data?.excerpt,
            duration: course?.data?.duration
        })
        setRelatedCourses(course?.data?.related_courses)
        setCourseModule(course?.data?.curriculum)
        setReviews(course?.data?.reviews)
    }, [courseSlug, course])
    return (
        <>
            <SingleCourseHero courseInfo={courseInfo} />
            <Container>
                {/* <Grid container item xs={12}>
                    <PartnerLogoCollection />
                </Grid> */}

                <CourseOverview

                    courseModule={courseModule}

                    courseInfo={courseInfo}

                />
            </Container>
            {/* <Grid container item xs={12}>
                    <WebinarRequirements />
                </Grid>
                <Grid container item xs={12}>
                    <CourseContent />
                </Grid> */}
            {/* <Grid container item xs={12}>
                    <HowItWorks />
                </Grid> */}

            <CourseReview />
            {/* 
                <Grid container item xs={12}>
                    <RecognizedCertificate />
                </Grid>
                <Grid container item xs={12}>
                    <FAQ />
                </Grid> */}
            <Container>
                <RelatedCourses relatedCourses={relatedCourses} />

            </Container>


        </>
    )
}

export default CourseItemBlock
