import { Grid } from '@material-ui/core'
import React from 'react'
import BlogBanner from './BlogBanner.js/BlogBanner'
import BlogHtml from './BlogHtml/BlogHtml'
import RelatedNews from './RelatedNews/RelatedNews'

const BlogItemBlock = ({ blog }) => (
    <>
        <Grid container spacing={0}>
            <Grid container item xs={12}>
                <BlogBanner title={blog.title.rendered} />
            </Grid>
            <Grid container item xs={12}>
                <BlogHtml blog={ blog } />
            </Grid>
            <Grid container item xs={12}>
                <RelatedNews />
            </Grid>
        </Grid>
    </>
)
export default BlogItemBlock
