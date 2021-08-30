import Grid from "@material-ui/core/Grid"
import React from 'react'
import AllBlogPosts from './AllBlogPosts/AllBlogPosts'
import CompanyUpdates from './CompanyUpdates/CompanyUpdates'
import EditorsBlogPick from "./EditorsBlogPick/EditorsBlogPick"
import GetTips from './GetTips/GetTips'
import NewsAndPress from './NewsAndPress/NewsAndPress'
import RecentBlogPosts from './RecentBlogPosts/RecentBlogPost'
import SignUpBanner from './SignUpBanner/SignUpBanner'
import SignUpBannerDark from './SignUpBanner/SignUpBannerDark'
import Tutorials from './Tutorials/Tutorials'
import WelcomeBlog from './WelcomeBlog'

const BlogsBlock = ({editor_picks, all_posts, recent_posts, latest_news, latest_tutorials }) => (
    <>
        <Grid container spacing={0}>
            <Grid container item xs={12}>
                <WelcomeBlog />
            </Grid>
            <Grid container item xs={12}>
                <EditorsBlogPick editor_picks={editor_picks} />
            </Grid>
            <Grid container item xs={12}>
                <RecentBlogPosts recent_posts={recent_posts} />
            </Grid>
            <Grid container item xs={12}>
                <GetTips />
            </Grid>
            <Grid container item xs={12}>
                <AllBlogPosts all_posts={all_posts} />
            </Grid>
            <Grid container item xs={12}>
                <SignUpBanner />
            </Grid>
            <Grid container item xs={12}>
                <Tutorials latest_tutorials={latest_tutorials} />
            </Grid>
            <Grid container item xs={12}>
                <CompanyUpdates latest_news={latest_news} />
            </Grid>
            <Grid container item xs={12}>
                <SignUpBannerDark />
            </Grid>
            <Grid container item xs={12}>
                <NewsAndPress />
            </Grid>
        </Grid>
    </>
)

export default BlogsBlock
