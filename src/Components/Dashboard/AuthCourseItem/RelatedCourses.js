import { Grid, makeStyles } from '@material-ui/core'
import React from 'react';
import CourseSlider from 'src/shared/CourseSlider/CourseSlider'

const useStyles = makeStyles({
    title:{
        fontWeight:'600',
        fontSize:'3.6rem',
        lineHeight:'5.4rem',
        color: '#292628',
        padding:'1.6rem'
    }
})

const RelatedCourses = ({relatedCourses}) => {
    const classes = useStyles()
    return (
        <Grid container justifyContent='center' style={{marginBottom:'1.6rem'}}>
            <h2 className={classes.title}>Related Courses</h2>
            <CourseSlider courses={relatedCourses}/>
        </Grid>
    );
}

export default RelatedCourses;