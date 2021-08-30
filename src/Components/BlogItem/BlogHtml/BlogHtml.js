import { Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Row from 'src/shared/Row/Row';
import NewsCategories from '../NewsCategories/NewsCategories';
import PopularNews from '../PopularNews/PopularNews';
import PopularTags from '../PopularTags/PopularTags';
import BlogComment from './BlogComment';
import styles from './BlogHtml.module.css';

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


const BlogHtml = ({ blog }) => {
    const classes = useStyles();
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    return (
        <Container className={styles.bloghtml_container}>
            <Row>
                <Grid container className={styles.bloghtml_content}>
                    <Grid item xs={12} md={8} lg={8} style={{ paddingRight: '20px' }}>
                        <div
                            dangerouslySetInnerHTML={createHTML(
                                blog.content.rendered
                            )}
                        ></div>
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

                        <BlogComment />

                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        {/* filter box  */}
                        <Paper component="form" className={classes.root}>
                            <InputBase
                                className={classes.input}
                                placeholder="Search Posts"
                                inputProps={{ 'aria-label': 'search google posts' }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon fontSize="large" />
                            </IconButton>
                        </Paper>

                        {/* News categories  */}
                        <NewsCategories />
                        {/* popular news */}
                        <Grid style={{ padding: '20px' }}>
                            <PopularNews />
                        </Grid>
                        {/* Popular tags */}
                        <PopularTags />


                    </Grid>
                </Grid>

            </Row>
        </Container>
    );
};

export default BlogHtml;