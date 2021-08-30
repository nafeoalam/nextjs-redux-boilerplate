import Image from 'next/image'

import CustomButton from 'src/shared/CustomButton/CustomButton'
import heroImg from "/public/assets/images/hero-img.png"
import styles from "../../styles/Home.module.css"
import Search from 'src/shared/Search/Search'

//Material Ui
import Grid from "@material-ui/core/Grid"
import { Container, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import Hidden from '@material-ui/core/Hidden'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"


const FindCourse = () => {
    const theme = useTheme()
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Grid className={styles.heroSection}>
            <Container>
                <Grid container justifyContent='center'>
                    <Grid item sm={6}>
                        <Grid item >
                            <div className={styles.findCourse__TitleSec}>
                                <Typography variant="h1" className={styles.title} align="left" >Learn</Typography>
                                <Typography variant="h1" className={styles.title} align="left">New Skills Today</Typography>
                            </div>
                        </Grid >
                        <Grid item>
                            <div className={styles.findCourse__SubTitleSec}>
                                Take your career to the next level.
                            </div>
                        </Grid >
                        <Grid item >
                            <Search placeholder="Find a course..." style={{ marginBottom: "3.5rem" }} onChange={e => console.log(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <div className={styles.findCourse__BtnSec}>
                                <CustomButton variant="contained" color="primary" style={{ padding: mediumScreen ? "1rem 3.3rem" : "2rem 4.4rem" }}>
                                    Start Your Free 4 Weeks
                                </CustomButton>
                            </div>
                        </Grid >
                        <Grid item >
                            <div className={styles.findCourse__CertificateSec}>
                                <div className="itemCenter">
                                    <CheckIcon style={{ color: "#77C05B", marginRight: ".5rem" }} />
                                    <Typography style={{ fontSize: "1.4rem" }}>
                                        verifiable certificates
                                    </Typography>
                                </div>
                                <div className="itemCenter">
                                    <CheckIcon style={{ color: "#77C05B", marginLeft: "1.2rem", marginRight: ".5rem" }} />
                                    <Typography style={{ fontSize: "1.4rem" }}>
                                        verifiable certificates
                                    </Typography>
                                </div>
                            </div>
                        </Grid >
                    </Grid>
                    <Hidden smDown>
                        <Grid item sm={6}>
                            <Grid item className="itemCenter">
                                <Image src={heroImg} layout="intrinsic" />
                            </Grid >
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </Grid>
    )
}

export default FindCourse
