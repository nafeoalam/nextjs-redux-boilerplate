import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import commaNumber from 'comma-number'
import Image from 'next/image'

const useStyles = makeStyles({
    cardContainer: {
        background: '#F4F4F4',
        borderRadius: '1rem',
        minHeight: '200px',
        width: '100%',
        padding: '1.6rem'
    },
    imageContainer: {
        position: 'relative'
    },
    image: {
        objectFit: 'cover'
    },
    getTranscriptButton: {
        padding: '1.6rem 4.2rem',
        fontSize: '1.8rem !important'
    },
    courseDetailsContainer: {
        padding: '1.6rem 0 2.4rem 1.6rem'
    },
    totalStudents: {
        color: '#292628',
        fontWeight: '500',
        fontSize: '1.8rem',
        lineHeight: '3.6rem'
    },
    courseName: {
        color: '#000000',
        fontWeight: '600',
        fontSize: '2.4rem',
        lineHeight: '3.4rem'
    },
    authorName: {
        color: '##5A5755',
        fontWeight: '600',
        fontSize: '1.8rem',
        lineHeight: '2.7rem'
    }
})

const secondsToHms = (timeDuration) => {
    timeDuration = Number(timeDuration)
    var h = Math.floor(timeDuration / 3600)
    var m = Math.floor(timeDuration % 3600 / 60)
    var s = Math.floor(timeDuration % 3600 % 60)

    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : ""
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : ""
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""
    return hDisplay + mDisplay + sDisplay
}

const MyCourseCard = ({ course }) => {
    const classes = useStyles()
    return (
        <div className={classes.cardContainer}>
            <Grid container justifyContent='center'>
                <Grid item xs={10} sm={4} md={3} lg={3} >
                    <div className='my-course-image-contaner' >
                        <Image
                            src={course.imageUrl || '/assets/images/course-image-demo.png'}
                            layout='fill'
                            quality={25}
                            placeholder='blur'
                            priority
                            blurDataURL='/assets/images/cards/news_press.png'
                            alt={course.courseName}
                            className='image'
                        />
                    </div>
                </Grid>
                <Grid item container xs={12} sm={8} md={9} lg={9} spacing={0}>
                    <Grid container direction='row'>
                        <Grid item container xs={12} md={8} direction='column' justifyContent='space-between' className={classes.courseDetailsContainer}>
                            <Grid item >
                                <h4 className={classes.totalStudents}>{secondsToHms(course.totalDuration)}{' | '}{commaNumber(course.totalStudents)}{' Students'}</h4>
                            </Grid>

                            <Grid item >
                                <h3 className={classes.courseName}>{course.courseName}</h3>
                            </Grid>

                            <Grid item >
                                <Grid container justifyContent='space-between'>
                                    <h4 className={classes.authorName}>{course.authorName}</h4>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item container alignItems='center' justifyContent='center' xs={12} md={4}>
                            <div>
                                <Button variant="outlined" color="primary" className={classes.getTranscriptButton}>
                                    Certificate/Transcript
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MyCourseCard