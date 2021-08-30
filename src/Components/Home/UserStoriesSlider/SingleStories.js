import { Grid, Typography } from '@material-ui/core';
import React from 'react';


const SingleStories = ({ customStyles, testimonial }) => {
    const url = "https://www.youtube.com/embed/f_sEWa5hA0Q"
    return (
        <div className={customStyles.singleStories}>
            <Grid justifyContent="center"
                alignItems="center" container spacing={5}>
                <Grid item md={6} sm={12}>
                    <div className={customStyles.userContent}>
                        <Typography component="article" paragraph >
                            <p style={{
                                fontFamily: "OpenSans-Semibold",
                                color: '#4A6474',
                                lineHeight: '2.7rem',
                                fontSize: '1.7rem'
                            }}>   {testimonial.post_content} </p>
                        </Typography>

                        <div className="userInfo">
                            <Typography component="p" style={{
                                color: '#4A6474',
                                fontWeight: '500',
                                lineHeight: '3rem',
                                fontSize: '2rem'
                            }}> {testimonial.name} </Typography>
                            <Typography component="p" style={{
                                color: '#4A6474',
                                fontWeight: '500',
                                lineHeight: '1.9rem',
                                fontSize: '1.4rem'
                            }} > {testimonial.designation} </Typography>
                            {/* <p style={{ marginBottom: 2, padding: 0 }}></p>
                            <p className="MPZero">Student</p> */}
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} sm={12}>
                    <div className="userInfoMedia" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {testimonial.video_url ? (
                            <iframe width="100%" height="240" src={testimonial.video_url ? testimonial.video_url : url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        ) : <img src={testimonial.image} style={{ height: '30rem' }} alt="no-image-found" />}

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SingleStories
