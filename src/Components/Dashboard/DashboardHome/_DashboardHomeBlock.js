import Grid from '@material-ui/core/Grid';

import WelcomeLesson from './WelcomeLesson';
import CoursesAutoSlider from "./CoursesAutoSlider"
import RecommendedCourses from "./RecommendedCourses"
import FeaturedCourses from "./FeaturedCourses"
import SelfCareEssentialCourses from "./SelfCareEssentialCourses"
import BestOfThisMonth from "./BestOfThisMonth"
import TrendingNow from "./TrendingNow"
import WorkshopSliderHome from './WorkshopsSliderHome';

export const DashboardHomeBlock = ({ recommendedCourses, featuredCourses }) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <WelcomeLesson />
            </Grid>
            <Grid item xs={12}>
                <CoursesAutoSlider featuredCourses={featuredCourses} />
            </Grid>
            <Grid item xs={12}>
                <RecommendedCourses recommendedCourses={recommendedCourses} />
            </Grid>
            <Grid item xs={12}>
                <FeaturedCourses featuredCourses={featuredCourses} />
            </Grid>
            <Grid item xs={12}>
                <SelfCareEssentialCourses recommendedCourses={recommendedCourses} />
            </Grid>
            <Grid item xs={12}>
                <BestOfThisMonth featuredCourses={featuredCourses} />
            </Grid>
            <Grid item xs={12}>
                <TrendingNow recommendedCourses={recommendedCourses} />
            </Grid>
            <Grid item xs={12}>
                <WorkshopSliderHome />
            </Grid>
        </Grid>
    )
}
