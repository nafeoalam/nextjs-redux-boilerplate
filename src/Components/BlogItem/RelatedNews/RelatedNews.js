import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchRelatedPosts } from 'src/api/routes/blog.api';
import BlogCard from 'src/shared/Card/BlogCard';
import Row from 'src/shared/Row/Row';
import CheckHelper from 'src/shared/_Helper/check.helper';
import styles from './RelatedNews.module.css';

const RelatedNews = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const { data: related_post } = await fetchRelatedPosts()
            setPosts(related_post)
        }
        fetchData();
    }, [])

    return (
        <Container container maxWidth={true} className={styles.related_news_container}>
            <Row>
                <Grid container spacing={2} className={styles.related_news_content}>
                    <Grid container justifyContent="center">
                        <Typography variant="h3" component="p" align="center" style={{ padding: '20px 0' }}> Related News  </Typography>
                    </Grid>

                    {CheckHelper.hasArrayItem(posts) ? posts.map((post, index) => (

                        <Grid key={post.ID} container justifyContent="center" item xs={12} md={4} lg={4}>
                            <BlogCard post={{ title: post.post_title, short_description: post.post_content, imageUrl: post.featured_image, author: post.author_name, post_date: post.post_date, slug: post.post_name }} />
                        </Grid>

                    )) : ""}
                </Grid>

            </Row>
        </Container >
    )
}

export default RelatedNews
