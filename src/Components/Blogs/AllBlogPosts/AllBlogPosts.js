import { Container, Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from 'src/api/routes/blog.api';
import BlogCard from 'src/shared/Card/BlogCard';
import Row from 'src/shared/Row/Row';
import CheckHelper from 'src/shared/_Helper/check.helper';
import styles from './AllBlogPosts.module.css';


const AllBlogPosts = ({ all_posts }) => {
    const [allPost, setAllPost] = useState([])
    const [page, setPage] = useState(allPost.current_page)
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        async function fetchData() {
            const { data } = await fetchAllBlogPosts(page, 6)
            setAllPost(data)
        }
        fetchData();
    }, [page]);

    if (!all_posts?.data?.length) return <p>Loading...</p>
    return (
        <Container container className={styles.allblog_container}>
            <Row>
                <Grid container spacing={2} className={styles.allblog_content}>
                    <Grid container justifyContent="center">
                        <Typography variant="h3" component="p" align="center" style={{ padding: '20px 0' }}> All Blog Post  </Typography>
                    </Grid>
                    {
                        CheckHelper.hasArrayItem(allPost.data) ? allPost.data.map((post, pId) => (
                            <Grid key={post.ID} container justifyContent="center" item xs={12} md={4} lg={4}>
                                <BlogCard post={{ title: post.post_title, short_description: post.post_content, imageUrl: post.featured_image, author: post.author_name, post_date: post.post_date, slug: post.post_name }} />
                            </Grid>
                        )) : ""
                    }
                    <Grid container justifyContent="center" className={styles.pagination}>
                        <Pagination count={allPost.max_num_pages} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
                    </Grid>
                </Grid>

            </Row>
        </Container >
    )
}

export default AllBlogPosts
