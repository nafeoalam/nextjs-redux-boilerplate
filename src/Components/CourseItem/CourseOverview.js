import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Image from 'next/image';
import React from 'react';
import styles from 'src/styles/CourseOverview.module.css';
import logoI from 'public/assets/images/course/CPD.png'
import logo2 from 'public/assets/images/course/IAO.png'
import CourseContent from './CourseContent/CourseContent';
import moment from 'moment'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    listItemText: {
        fontSize: '1em',
    },
    demo: {
        background: 'none',
    },
    title: {
        margin: theme.spacing(4, 0, 6),
    },
    webinar_title: {
        margin: theme.spacing(1, 0, 2),
    },
}));

const createHTML = (htmlElements) => {
    return { __html: htmlElements };
};
function CourseOverview({ courseInfo, courseModule }) {
    const classes = useStyles();
    const { total_lesson, total_module, duration } = courseInfo
    return (
        <section className="sectionWrapper">
            <Grid container spacing={6}>
                <Grid item md={7} lg={7} className={styles.overview_bg}>
                    <div className={styles.overview_container}>
                        {/* <Typography variant="h3" gutterBottom className="sectionTitle mb-3">
                            Course Overview
                        </Typography> */}
                        <div
                            className="courseOverview"
                            dangerouslySetInnerHTML={createHTML(
                                courseInfo.overview
                            )}
                        ></div>

                    </div>
                    <CourseContent courseModule={courseModule} />
                </Grid>

                <Grid item md={5} lg={5}>
                    <Paper>
                        <div className={styles.courseField}>
                            <Typography variant="h6" gutterBottom className={classes.webinar_title}>
                                Globally recognised by
                            </Typography>
                            <div className={`${styles.logoSection} mb-3`}>
                                <Image src={logoI} alt="logo" />
                                <Image src={logo2} alt="logo" />
                                <Image src={logoI} alt="logo" />
                                <Image src={logo2} alt="logo" />
                            </div>
                            <div className="courseData mt-4">
                                <div className={styles.singleData}>
                                    <Image src="/assets/images/course/lesson.png" alt="" width="60" height="60" />
                                    <div className="ml-2">
                                        <Typography className="sectionTitle" variant="h4">
                                            {moment(duration, "HH:mm:ss").format("h.mm")} Hours
                                        </Typography>

                                        <Typography variant="subtitle1" className="poppinsMedium">
                                            Duration
                                        </Typography>
                                    </div>

                                </div>
                                <div className={styles.singleData}>
                                    <Image src="/assets/images/course/time.png" alt="" width="60" height="60" />
                                    <div className="ml-2">
                                        <Typography className="sectionTitle" variant="h4">
                                            {total_lesson} Lessons
                                        </Typography>

                                        <Typography variant="subtitle1" className="poppinsMedium">
                                            Plus assessments
                                        </Typography>
                                    </div>

                                </div>
                                <div className={styles.singleData}>
                                    <Image src="/assets/images/course/certificate.png" alt="" width="60" height="60" />
                                    <div className="ml-2">
                                        <Typography className="sectionTitle" variant="h4">
                                            {total_module} Modules
                                        </Typography>

                                        <Typography variant="subtitle1" className="poppinsMedium">
                                            Online
                                        </Typography>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}

export default CourseOverview
