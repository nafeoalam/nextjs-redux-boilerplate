import { Button, CircularProgress, Container, Grid, Paper, Typography } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Image from 'next/image';
import course_hero from 'public/assets/images/countries/course_hero.png';
import React from 'react';
import styles from 'src/styles/SingleCourseHero.module.css';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CircularBar from './CircularBar';
import CustomCircularProgressBar from './CircularBar';
import { makeStyles } from '@material-ui/core/styles';
import CustomBreadcrumbs from './CustomBreadCrumbs';
const useStyles = makeStyles((theme) => ({
    feature: {
        padding: theme.spacing(5, 2),

        display: "flex",
        listStyle: "none",

        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        "& li": {
            display: "flex",
            margin: theme.spacing(1, 0)
        }
    },
    percent: {
        display: "flex",
        padding: theme.spacing(1.5, 2),
        alignItems: "center",
    }
}))
const SingleCourseHero = ({ courseInfo }) => {
    const classes = useStyles()
    const courseImage = courseInfo?.featured_image
    return (
        <div className={styles.hero_product}>
            <Container className={styles.section_seperator}>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <img src={courseImage} alt="" />
                        {/* <Image src={courseImage} alt="" /> */}
                    </Grid>
                    <Grid item md={6}>
                        <div className={styles.single_course_content}>
                            <CustomBreadcrumbs title={courseInfo.title} />
                            <h2>{courseInfo.title}</h2>
                            <p>{courseInfo.excerpt}</p>
                            {/* <h4 className={styles.subHead}>Become a certified photographer</h4> */}

                            <div className={styles.offer} mb={4}>Limited time offer</div>

                            <Button className={styles.btn} variant="contained" mb={4} color="secondary">
                                Enroll Now
                            </Button>

                            <ul className={styles.ul}>
                                <li><CheckBoxIcon fontSize="large" className={styles.icon} /> Globally Recognised</li>
                                <li><CheckBoxIcon fontSize="large" className={styles.icon} /> Money back guarantee</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={4} m={30} className={styles.promoBoxInfo}>
                    <Grid item md={6}>
                        <Paper>
                            <Typography component="ul" className={classes.feature}>
                                <Typography component="li">
                                    <Typography component="span" className="sectionTitle mr-1">
                                        {courseInfo.course_student}</Typography>
                                    <Typography component="span" className="poppinsMedium">Students</Typography>
                                </Typography>

                                <Typography component="li" className="poppinsMedium "> <EqualizerIcon fontSize="large" className={styles.icon2} />
                                    All levels</Typography>
                                <Typography component="li" className="poppinsMedium "> <VerifiedUserIcon className={styles.icon2} /> Certified</Typography>

                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item md={6}>
                        <Paper>
                            <div className={classes.percent}>
                                <CustomCircularProgressBar
                                    strokeWidth="10"
                                    sqSize="100"
                                    percentage={40} />
                                <div className="ml-2">
                                    <Typography variant="h5" className="sectionTitle" gutterBottom>Most of this week’s places have been filled.</Typography>
                                    <Typography variant="subtitle1">Start your course now to guarantee your place.</Typography>

                                </div>

                            </div>

                        </Paper>

                    </Grid>
                </Grid>


            </Container>
        </div>
    );
};

export default SingleCourseHero;