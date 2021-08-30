import { Container, Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import React from 'react'
import styles from './CourseBenefits.module.css'
import eduImg from 'public/assets/images/education.png'
const CourseBenefits = () => {
    return (
        <div className={styles.main}>
            <Container>

                <Typography align="center" paragraph component="h3" className="sectionTitle" variant="h3" >
                    CourseBenefits
                </Typography>
                <div className={styles.contentWrap}>
                    <Grid container spacing={4}>
                        <Grid item md={4} sm={6} >
                            <div className={styles.singleBenefits}>
                                <Image src={eduImg} alt="education" />
                                <div className={styles.benefitsInfo}>
                                    <Typography variant="h4" paragraph>
                                        University Approved
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                    >
                                        University Approved
                                    </Typography>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4} sm={6}>
                            <div className={styles.singleBenefits}>
                                <Image src={eduImg} alt="education" />
                                <div className={styles.benefitsInfo}>
                                    <Typography variant="h4" paragraph>
                                        University Approved
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                    >
                                        University Approved
                                    </Typography>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4} sm={6}>
                            <div className={styles.singleBenefits}>
                                <Image src={eduImg} alt="education" />
                                <div className={styles.benefitsInfo}>
                                    <Typography variant="h4" paragraph>
                                        University Approved
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                    >
                                        University Approved
                                    </Typography>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4} sm={6}>
                            <div className={styles.singleBenefits}>
                                <Image src={eduImg} alt="education" />
                                <div className={styles.benefitsInfo}>
                                    <Typography variant="h4" paragraph>
                                        University Approved
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                    >
                                        University Approved
                                    </Typography>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4} sm={6}>
                            <div className={styles.singleBenefits}>
                                <Image src={eduImg} alt="education" />
                                <div className={styles.benefitsInfo}>
                                    <Typography variant="h4" paragraph>
                                        University Approved
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                    >
                                        University Approved
                                    </Typography>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4} sm={6}>
                            <div className={styles.singleBenefits}>
                                <Image src={eduImg} alt="education" />
                                <div className={styles.benefitsInfo}>
                                    <Typography variant="h4" paragraph>
                                        University Approved
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                    >
                                        University Approved
                                    </Typography>
                                </div>
                            </div>

                        </Grid>

                    </Grid>
                </div>

            </Container>
        </div>
    )
}

export default CourseBenefits
