import Typography from '@material-ui/core/Typography'
import React from 'react'
import CustomButton from 'src/shared/CustomButton/CustomButton'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import welcomeImg from "/public/assets/images/welcome-lesson.png"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default function WelcomeLesson() {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <div style={{ background: "#553C8B", padding: "2.5rem 0", }}>
                <Container maxWidth="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#ffffff" }}>
                    <div style={{ maxWidth: "20rem" }}>
                        Get started on your creative journey.
                    </div>
                    <div>
                        Join Skillshare
                    </div>
                    <div>
                        Watch 3 Lessons
                    </div>
                    <div>
                        Finish a Class
                    </div>
                    <div>
                        Join a Workshop
                    </div>
                    <div>
                        Upload a Project
                    </div>
                </Container>
            </div>
            {
                smallScreen ? <div style={{ height: "5rem" }}></div> : <div style={{ height: "9.5rem" }}></div>
            }
            <Container maxWidth="lg">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "2.6rem", fontFamily: "Poppins-Bold" }}>
                        Welcome back Zubair, ready for your next lesson?
                    </div>
                    <div>
                        <CustomButton style={{ borderRadius: "6px" }} >
                            <Typography style={{ fontSize: "1.6rem", fontWeight: 600 }}>View Watch History</Typography>
                        </CustomButton>
                    </div>
                </div>
                {/* {
                    smallScreen ? <div style={{ height: "2rem" }}></div> : <div style={{ height: "3rem" }}></div>
                } */}
                <div style={{ height: "3rem" }}></div>
                <div style={{
                    display: "flex", background: "#ffffff", boxSadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                    borderRadius: "1rem", padding: "1rem"
                }}>
                    <Image src={welcomeImg} alt="" />
                    <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontSize: "2.4rem", fontWeight: 500 }}>LESSON 8 OF 11 | 13m</Typography>
                                <MoreHorizIcon style={{ fontSize: "2.5rem" }} />
                            </div>
                            <Typography variant="h2" style={{ fontFamily: "Poppins-Bold" }}>Editing Your Footage</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography style={{ fontSize: "1.8rem", fontWeight: 500 }}>Author Name</Typography>
                            <Typography style={{ fontSize: "1.8rem", fontWeight: 500 }}>30 Minutes Left</Typography>
                        </div>
                    </div>
                </div>
                {/* <Grid container>
                <Grid item xs={12} md={2}>
                    <Image src={welcomeImg} />
                </Grid>
                <Grid item container xs={12} md={6}>
                    <Grid item xs={12}>
                        <Typography>LESSON 8 OF 11 | 13m</Typography>
                        <Typography>Editing Your Footage</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography>Author</Typography>
                        <Typography>30 minutes left</Typography>
                    </Grid>
                </Grid>
            </Grid> */}
            </Container >
            {
                smallScreen ? <div style={{ height: "5rem" }}></div> : <div style={{ height: "9.5rem" }}></div>
            }
        </>
    )
}
