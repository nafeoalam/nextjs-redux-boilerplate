import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import React, { useRef } from 'react';
import Slider from "react-slick";
import BlogCard from 'src/shared/Card/BlogCard';
import Row from 'src/shared/Row/Row';
import CheckHelper from 'src/shared/_Helper/check.helper';
import styles from './RecentBlogPost.module.css';
const useStyles = makeStyles({
    icon: {
        border: '1px solid gray'
    },
});

const RecentBlogPost = ({ recent_posts }) => {
    const classes = useStyles();
    //creating the ref
    const customSlider = useRef();

    // setting slider configurations
    const sliderSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ],
        nextArrow: <ChevronRightOutlinedIcon color="primary" fontSize="large" className={classes.icon} />,
        prevArrow: <ChevronLeftOutlinedIcon color="primary" fontSize="large" style={{ border: '2px solid #2d2d2d' }} />,
    }

    return (
        <Container Container maxWidth={true} className={styles.recent_container}>
            <Row>
                <Grid container spacing={2} className={styles.recent_content}>
                    <Grid container justifyContent="center">
                        <Typography variant="h3" component="p" align="center" style={{ padding: '20px 0' }}> Recent Posts  </Typography>
                    </Grid>
                    <div className={styles.recent_card_wrapper}>
                        <Slider {...sliderSettings} ref={customSlider}>
                            {
                                CheckHelper.hasArrayItem(recent_posts.data) ?
                                    recent_posts.data.map((post, index) => (
                                        <Grid key={post.ID} justifyContent="center" item xs={12} md={4} lg={4}>
                                            <BlogCard post={{ title: post.post_title, short_description: post.post_content, imageUrl: post.featured_image, author: post.author_name, post_date: post.post_date, slug: post.post_name }} />
                                        </Grid>
                                    ))
                                    : ""
                            }
                        </Slider>
                    </div>
                </Grid>

            </Row>
        </Container >
    )
}

export default RecentBlogPost


