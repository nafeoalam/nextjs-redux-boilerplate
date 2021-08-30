import { Button, Container, Grid, Link } from '@material-ui/core'
import React from 'react'
import CourseCard from 'src/shared/Card/CourseCard'
import CheckHelper from 'src/shared/_Helper/check.helper'

const PrimaryButton = ({ onClick, btnText = 'ENTER' }) => {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '100px', background: ' #ED4266', color: '#fff', }} >
            {btnText}
        </Button>
    )
}

const PopularCourses = ({ popular_courses }) => {
    return (
        <Grid container style={{ background: 'linear-gradient(180deg, rgba(245, 248, 251, 0) 0%, #F5F8FB 100%)', padding: '3.6rem 0' }}>
            <Container>
                <h2 style={{
                    textAlign: 'center', color: '#21243D', fontWeight
                        : '600', fontSize: '3.6rem', lineHeight: '5.4rem', marginBottom: '2.4rem'
                }}>Popular Courses</h2>
                <Grid container spacing={4} >
                    {
                        CheckHelper.hasArrayItem(popular_courses) ? popular_courses.map((course, index) => {
                            return <Grid key={index} container justifyContent="center" item xs={12} md={3} lg={3}>
                                <CourseCard cardValues={{ courseName: course.post_title, totalStudents: course.students_count, imageUrl: course.featured_image, rating: course.average_rating, slug: course.slug }} />
                            </Grid>
                        })
                            : (<Grid item xs={12} sm={6} md={4}>
                                <p style={{ width: '100%', textAlign: 'center', padding: '1.6rem' }} >No Course Yet</p>
                            </Grid>)
                    }
                </Grid>
                <Grid container spacing={4}>
                    <Grid container alignItems='center' justifyContent='center' style={{ padding: '2.4rem 0' }}>
                        <Link color="inherit" href="/courses">
                            <PrimaryButton onClick={() => console.log('Cliked')} btnText='All Courses' />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default PopularCourses