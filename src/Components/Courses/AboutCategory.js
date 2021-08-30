import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

const AboutCategory = () => {
    return (
        <section className="sectionWrapper">
            <Container>
                <Grid item sm={6}>
                    <Typography variant="h2" className="sectionTitle" paragraph component="h2">
                        Explore Online Courses with One Education
                    </Typography>
                </Grid>
                <div>
                    <Typography style={{
                        color: "#52556E",
                        fontFamily: "OpenSans-Regular"
                    }}
                        variant="h5"
                        paragraph
                        component="p">
                        We at One Education believe in delivering higher education at a lower cost, which is why we offer a wide range of online certification courses with a four-week free trial. So, if you are looking to learn a new language or prep for an IELTS training exam, we offer language certification courses to help you do that.
                    </Typography>
                    <Typography variant="h5" style={{
                        color: "#52556E",
                        fontFamily: "OpenSans-Regular"

                    }}
                        paragraph
                        component="p">
                        If you are a graduate student looking to learn a new skill, an industry professional looking to upskill, or just someone wanting to pick up a new hobby, we have a wide range of courses ranging across diverse subjects like photography, design, technology, business, beauty, music and more to help you with that.
                    </Typography>
                    <Typography variant="h5"
                        style={{
                            color: "#52556E",
                            fontFamily: "OpenSans-Regular"
                        }}
                        paragraph
                        component="p">
                        Each complete course offers 20 hours of learning which includes practical training and free assessments. On completion of each module, you get the opportunity to obtain a certificate from globally recognized universities like Austin Peay State University and other such institutions. Our educators come with exceptional industry training and sound educational background, which guarantees that you are being coached by the best.
                    </Typography>
                </div>

            </Container>
        </section>

    )
}

export default AboutCategory
