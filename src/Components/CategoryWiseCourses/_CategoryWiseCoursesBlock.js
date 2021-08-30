import { Grid } from '@material-ui/core'
import React from 'react'
import SingleCategoryCourses from './SingleCategoryCourses'

const CategoryWiseCoursesBlock = () => {
    return (
        <Grid container spacing={0}>
            <Grid item style={{width:'100%'}}>
                <SingleCategoryCourses />
            </Grid>
        </Grid>
    )
}

export default CategoryWiseCoursesBlock
