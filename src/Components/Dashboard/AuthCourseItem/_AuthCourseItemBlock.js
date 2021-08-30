import { Container, Grid } from '@material-ui/core'
import React from 'react'
import CourseSections from './CourseSections/CourseSections'
import LessonPreviewAndCurriculum from './LessonPreviewAndCurriculum/LessonPreviewAndCurriculum'
import RelatedCourses from './RelatedCourses'
import relatedCourses from '../../../../public/assets/json_data/courses.json'

const AuthCourseItemBlock = () => {
    return (
        <Container>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <LessonPreviewAndCurriculum />
                </Grid>
                <Grid item xs={12}>
                    <CourseSections />
                </Grid>
                <Grid item xs={12}>
                    <RelatedCourses relatedCourses={relatedCourses} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AuthCourseItemBlock
