import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import ReviewDetails from './ReviewDetails';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px 0'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '350px',
        textAlign: 'center',
        minHeight: '230px',
    },
    title: {
        fontWeight: '600',
        fontSize: '130px',
        lineHeight: '130px',
    },
    sub_title: {
        fontWeight: '600'
    },
    progress_wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0'

    },
    progress_box: {
        minWidth: '500px',
        minHeight: '50px',
        backgroundColor: '#F4F4F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '15px',

    },
    progress_box_count: {
        minHeight: '50px',
        backgroundColor: '#F4E183',
        marginRight: 'auto'
    },
    review_count: {
        order: 1,
        marginLeft: '35px',
        paddingLeft: '15px',
        width: '35%',
        textAlign: 'end'
    },
    progress_rating: {
        paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
        wrapper: {
            minWidth: '250px',
            minHeight: '230px',
        },
        title: {
            fontWeight: '300',
            fontSize: '50px',
            lineHeight: '100px',
        },
        progress_box: {
            minWidth: '250px',
        },
    },
    [theme.breakpoints.up('md')]: {
        //
    },
    [theme.breakpoints.up('lg')]: {
        //
    },

}));
const total_reviews = 50
const ReviewsCourse = () => {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid container justifyContent="center" item xs={12} md={4} lg={4}>
                <div className={classes.root}>
                    <Paper elevation={3} className={classes.wrapper} >
                        <div className={classes.content}>
                            <Typography variant="h1" className={classes.title} component="h3"> 4.9 </Typography>
                            <Rating name="read-only" value="3" readOnly className={classes.rating} size="large" />
                            <Typography variant="h5" className={classes.sub_title} component="p"> 60 Ratings </Typography>
                        </div>
                    </Paper>

                </div>
            </Grid>
            <Grid container  item xs={12} md={8} lg={8}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <div className={classes.progress_wrapper}>
                            <Rating name="read-only" value="5" readOnly className={classes.progress_rating} size="large" />
                            <div className={classes.progress_box}>
                                <Typography variant="h5" className={classes.review_count} component="p"> 50 Reviews </Typography>
                                {/* <div className={classes.progress_box_count} style={{ width: `${total_reviews}%` }}>
                                </div> */}
                                <div className={classes.progress_box_count} style={{ width: '100%' }}>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={classes.progress_wrapper}>
                            <Rating name="read-only" value="4" readOnly className={classes.progress_rating} size="large" />
                            <div className={classes.progress_box}>
                                <Typography variant="h5" className={classes.review_count} component="p"> 40 Reviews </Typography>
                                {/* style={{ width: `${total_reviews}%` }} */}
                                <div className={classes.progress_box_count} style={{ width: `60%` }}>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={classes.progress_wrapper}>
                            <Rating name="read-only" value="3" readOnly className={classes.progress_rating} size="large" />
                            <div className={classes.progress_box}>
                                <Typography variant="h5" className={classes.review_count} component="p"> 30 Reviews </Typography>
                                <div className={classes.progress_box_count} style={{ width: `30%` }}>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={classes.progress_wrapper}>
                            <Rating name="read-only" value="2" readOnly className={classes.progress_rating} size="large" />
                            <div className={classes.progress_box}>
                                <Typography variant="h5" className={classes.review_count} component="p"> 20 Reviews </Typography>
                                <div className={classes.progress_box_count} style={{ width: `20%` }}>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.progress_wrapper}>
                            <Rating name="read-only" value="1" readOnly className={classes.progress_rating} size="large" />
                            <div className={classes.progress_box}>
                                <Typography variant="h5" className={classes.review_count} component="p"> 10 Reviews </Typography>
                                <div className={classes.progress_box_count} style={{ width: `10%` }}>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    
                </Grid>
            </Grid>


            <Grid container item xs={12}>
                <ReviewDetails />
            </Grid>

        </Grid>
    )
}

export default ReviewsCourse
