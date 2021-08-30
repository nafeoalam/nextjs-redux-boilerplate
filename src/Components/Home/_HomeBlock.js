//Material
import Grid from "@material-ui/core/Grid";
import React from "react";
import BlogCard from './BlogCard/BlogCard';
import EarnCertificate from './EarnCertificate';
import FindCourse from './FindCourse';
import GetStarted from './GetStarted';
import PopularCourses from './PopularCourses';
import SubscriptionBox from './SubscriptionBox/SubscriptionBox';
import UserStoriesSlider from './UserStoriesSlider/UserStoriesSlider';


const HomeBlock = ({ popular_courses, testimonials, recent_posts }) => (<>
    <Grid container spacing={0}>
        <Grid container item xs={12} >
            <FindCourse />
        </Grid>

        <Grid container item xs={12} >
            <PopularCourses popular_courses={popular_courses} />
        </Grid>
        <Grid container item xs={12}>
            <EarnCertificate />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <GetStarted />
        </Grid>

        <Grid item xs={12}>
            <UserStoriesSlider testimonials={testimonials} />
        </Grid>

        <Grid item xs={12}>
            <SubscriptionBox />
        </Grid>
        <Grid item xs={12}>
            <BlogCard recent_posts={recent_posts} />
        </Grid>
    </Grid>
</ >
)


export default HomeBlock;

