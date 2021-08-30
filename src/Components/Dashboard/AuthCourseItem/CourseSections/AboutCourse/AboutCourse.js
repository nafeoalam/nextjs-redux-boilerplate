import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    body_content: {
        textAlign: 'justify',
        paddingRight: '15px'
    },
    tag_title: {
        fontWeight: '600',
        marginTop: theme.spacing(1)
    },
    tag_btn: {
        margin: theme.spacing(1)
    },
}))


const AboutCourse = () => {
    const classes = useStyles()
    const [content, setContent] = useState('')
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://oe.zubairhasan.com//wp-json/wp/v2/pages/2`)
            setContent(response.data.content)
        }
        fetchData();
    }, [])

    return (
        <>
            <Grid container>
                <Grid container item xs={12} md={8} lg={8}>
                    <Typography className={classes.tag_title} variant="h4" component="h4" align="left" gutterBottom> About This Course  </Typography>
                    <div
                        className={classes.body_content}
                        dangerouslySetInnerHTML={createHTML(
                            content.rendered
                        )}
                    ></div>
                </Grid>
                <Grid container item xs={12} md={4} lg={4}>
                    <Grid item>
                        <Typography variant="h4" component="h4" gutterBottom  className={classes.tag_title}>  Related Coursess  </Typography>
                            <Grid>
                                <Button variant="outlined" className={classes.tag_btn} >
                                    Education
                                </Button>

                                <Button variant="outlined" className={classes.tag_btn} >
                                    Learning
                                </Button>

                                <Button variant="outlined" className={classes.tag_btn} >
                                    Study in Abroad
                                </Button>

                                <Button variant="outlined" className={classes.tag_btn} >
                                    Technology
                                </Button>

                                <Button variant="outlined" className={classes.tag_btn} >
                                    Creative
                                </Button>
                                <Button variant="outlined" className={classes.tag_btn} >
                                    Study
                                </Button>
                            </Grid>
                        </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default AboutCourse
