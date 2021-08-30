import React from 'react'
import Image from 'next/image'
import { Grid, Paper } from '@material-ui/core'
import commaNumber from 'comma-number'
import StarIcon from '@material-ui/icons/Star'
import Link from 'next/link'
const SingleCourseCard = ({ course, hideRating = false }) => {
    return (
        <Link href={`/course/${course.slug}`}>
            <Paper
                className='single-course-card'
                style={{ cursor: 'pointer' }}
            >
                <Grid
                    container
                    direction='row'
                    className='single-course-content-container'
                // alignItems='center'
                >
                    <Grid item style={{ maxWidth: '10rem' }}>
                        <div className='course-image-container' >
                            {/* <Image src='https://source.unsplash.com/user/erondu/500x300' layout='fill' className='image' /> */}
                            <Image
                                src={course.featured_image || '/assets/images/course-image-demo.png'}
                                layout='fill'
                                quality={25}
                                placeholder='blur'
                                priority
                                blurDataURL='/assets/images/cards/news_press.png'
                                alt={course.title}
                                className='image'
                                />
                        </div>
                    </Grid>
                    <Grid item container xs={7} lg={8} spacing={0} className='course-card-overview-container'>
                        <Grid container direction='column' justifyContent='space-between'>
                            <Grid item >
                                <h3 className='course-card-course-title'>{course.title}</h3>
                            </Grid>
                            <Grid item >
                                <Grid container justifyContent='space-between'>
                                    <p className='course-card-total-students'>{commaNumber(course.students_count)}{' Students'}</p>
                                    {!hideRating && (
                                        <div className='align-icon'>
                                            <span className='course-card-rating'>{course.average_rating}</span>
                                            <span className='star-icon'> <StarIcon fontSize='large' /> </span>
                                        </div>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Link>
    )
}

export default SingleCourseCard