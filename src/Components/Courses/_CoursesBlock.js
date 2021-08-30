import React from 'react'
import FindCourse from './FindCourse'
import CourseListWithCategory from './CourseListWithCategory'
import CourseBenefits from './CourseBenefits/CourseBenefits'
import Grid from '@material-ui/core/Grid';
import AboutCategory from './AboutCategory';

// import SubscriptionBox from '../Home/SubscriptionBox/SubscriptionBox'


export default function CoursesBlock({ courseCategories }) {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <FindCourse />
            </Grid>
            <Grid item xs={12}>
                <CourseListWithCategory courseCategories={courseCategories} />
            </Grid>
            <Grid item xs={12}>
                <CourseBenefits />
            </Grid>
            <Grid item xs={12}>
                <AboutCategory />
                {/* Will be Reused Later */}
                {/* <SubscriptionBox /> */}
            </Grid>

        </Grid>
    )
}
