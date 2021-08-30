import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchRecentPost } from 'src/api/routes/courses.api';
import PopularNewsCard from 'src/shared/Card/PopularNewsCard';
import CheckHelper from 'src/shared/_Helper/check.helper';
function PopularNews() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        async function fetchData() {
            const {data : popular_news} = await fetchRecentPost(3);
            setPost(popular_news.data)
          }
          fetchData();
    }, [])

    return (
        <>
            <Typography variant="h4" component="p" align="left"> Popular News </Typography>
            <Grid container spacing={4} >
                {
                    CheckHelper.hasArrayItem(posts) ? posts.map((post, index) => (
                        <Grid key={ post.ID } container justifyContent="center" item >
                            <PopularNewsCard post ={{ title: post.post_name, imageUrl: post.featured_image, post_date: post.post_date, slug: post.post_name }} />
                        </Grid>
                    )) :""
                }
            </Grid>
        </>
    )
}

export default PopularNews
