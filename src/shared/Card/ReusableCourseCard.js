import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import commaNumber from 'comma-number'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles({
    root: {
        maxWidth: "350px",
        width: "100%",
        margin: "0 auto",
        // maxHeight: '360px',
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center',
        background: ' #FFFFFF',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: '20px',
        paddingBottom: '1.6rem'
    },
    title: {
        fontWeight: '600',
        fontSize: '1.8rem',
        lineHeight: '2.5rem',
        marginBottom: '1.6rem'
    },
    totalStudents: {
        fontSize: '1.6rem',
        lineHeight: '2.2rem',
        marginBottom: '.4rem',
        color: '#4A6474'
    },
    rating: {
        padding: '5px 0'
    },
    btn_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        textDecoration: 'none',
        padding: '1.1rem 3.2rem',
        backgroundColor: '#EAE9FF',
        borderRadius: '50px',
        color: '#7971EA',
        // marginBottom: '1.6rem',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#b0acf8',
            color: '#3c52b2',
        },
    }
})

const ReusableCourseCard = ({ course }) => {
    const { post_title, categoryName, students_count, featured_image, average_rating, slug } = course ? course
        : {
            'post_title': "N/A",
            'students_count': "N/A",
            'featured_image': "/assets/images/cards/popular_courses_one.png",
            'average_rating': 4,
            'slug': "dog-fostering-feeding-medication-vaccination"
        }
    const classes = useStyles()
    return (
        <>
            <Card className={classes.root} elevation={5} >
                <Link href={`/course/${slug}`} passHref >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={post_title}
                            height="160"
                            image={featured_image}
                            title={post_title}
                        />
                        <CardContent style={{ paddingBottom: '.4rem' }}>
                            <Typography className={classes.title} variant="h5" color="textPrimary" component="p">
                                {post_title}
                            </Typography>

                            {/* <Typography variant="h6" color="textSecondary" component="p">
                                {categoryName}
                            </Typography> */}

                            <Typography className={classes.students_count} variant="h6" color="textSecondary" component="p">
                                {commaNumber(parseInt(students_count))}{' Students'}
                            </Typography>

                            <Typography>
                                <Rating className={classes.rating} name="size-small" value={Number(average_rating) || 4.5} precision={0.5} />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>

                {/* <CardActions className={classes.btn_container}> */}
                <Button className={classes.btn} size="small" variant="contained" disableElevation>
                    Start Now
                </Button>
                {/* </CardActions> */}
            </Card>
        </>
    )
}

export default ReusableCourseCard