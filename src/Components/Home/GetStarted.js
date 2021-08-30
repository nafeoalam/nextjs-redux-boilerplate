import { Grid } from '@material-ui/core'
import React from 'react'
import styles from '../../styles/GetStarted.module.css'
const GetStarted = () => {
    return (
        <>
            <Grid className={styles.get_started_bg}>
                <Grid className={styles.get_started_container}>
                    <div className={styles.get_started_header}>
                        How it works
                    </div>
                    <div className={styles.get_started_content}>
                        <div className={styles.path_row}>
                            {/* set one  */}
                            <div className={styles.set}>
                                <div className={styles.circle}>
                                    <div className={styles.number}>
                                        01
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    |
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.path_header}>
                                        Choose a course
                                    </div>
                                    <div className={styles.path_info}>
                                        Start a One Education course of your choice for free.
                                    </div>
                                </div>
                            </div>

                            {/* set two  */}
                            <div className={styles.set_two}>
                                <div className={styles.circle}>
                                    <div className={styles.number}>
                                        02
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    |
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.path_header}>
                                        Attend online classes
                                    </div>
                                    <div className={styles.path_info}>
                                        You’ll have 2 interactive classes/week at your preferred time.
                                    </div>
                                </div>
                            </div>

                            {/* set three */}
                            <div className={styles.set_three}>
                                <div className={styles.circle}>
                                    <div className={styles.number}>
                                        03
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    |
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.path_header}>
                                        Develop your skills
                                    </div>
                                    <div className={styles.path_info}>
                                        Play Quizzes & complete weekly assignments.
                                    </div>
                                </div>
                            </div>

                            {/* set four */}
                            <div className={styles.set_four}>
                                <div className={styles.circle}>
                                    <div className={styles.number}>
                                        04
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    |
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.path_header}>
                                        Get Certified
                                    </div>
                                    <div className={styles.path_info}>
                                        Show your growth and level up your career.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>

    )
}

export default GetStarted