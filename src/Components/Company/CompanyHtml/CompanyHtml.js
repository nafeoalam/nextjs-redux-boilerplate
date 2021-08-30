import { Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import PopularNews from 'src/Components/BlogItem/PopularNews/PopularNews';
import Row from 'src/shared/Row/Row';
import styles from './CompanyHtml.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: '15px',
        padding: '10px 0'
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


const TutorialHtml = ({ blog }) => {
    const classes = useStyles();
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    return (
        <Container className={styles.bloghtml_container}>
            <Row>
                <Grid container className={styles.bloghtml_content}>
                    <Grid item xs={12} md={8} lg={8} style={{ paddingRight: '10px' }}>
                        {/* <div
                            dangerouslySetInnerHTML={createHTML(
                                blog.content.rendered
                            )}
                        ></div> */}
                        <h1> Company Content Goes Here </h1>
                        <div className={styles.social_wrapper}>
                            <Typography variant='h4' component="p" align="left"> Share On : </Typography>
                            <div className={styles.social_icon}>
                                <FaFacebookF size={28} />
                            </div>
                            <div className={styles.social_icon}>
                                <FaTwitter size={28} />
                            </div>
                            <div className={styles.social_icon}>
                                <FaInstagram size={28} />
                            </div>
                            <div className={styles.social_icon}>
                                <FaLinkedin size={28} />
                            </div>
                        </div>
                        <Divider component="hr" style={{ margin: '20px 0' }} />

                        {/* comment section */}

                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        {/* popular news */}
                        <PopularNews />
                    </Grid>
                </Grid>

            </Row>
        </Container>
    );
};

export default TutorialHtml;