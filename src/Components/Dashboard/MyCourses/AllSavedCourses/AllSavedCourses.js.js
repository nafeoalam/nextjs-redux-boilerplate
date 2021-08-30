import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import MyCourseCard from '../MyCourseCard'
import CheckHelper from 'src/shared/_Helper/check.helper'
import * as api from 'src/api/routes/mycourses.api'
import Filters from '../Filters'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSavedCourses } from 'src/redux/actions/myCourseActions'

const useStyles = makeStyles({
    pageTitle: {
        color: '#292628',
        fontSize: '3.6rem',
        lineHeight: '4.8rem',
        fontWeight: '600',
        textAlign: 'left'
    }
})

const AllSavedCourses = () => {
    const dispatch = useDispatch()

    const classes = useStyles()
    const userId = 111
    const { allSavedCourses } = useSelector(state => state.myCourseReducer)

    useEffect(async () => {
        if (!allSavedCourses) {
            dispatch(getAllSavedCourses(userId))
        }
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Filters />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {CheckHelper.hasArrayItem(allSavedCourses) && allSavedCourses.map(course => (
                        <Grid key={course.ID} item container justifyContent='center' xs={12}>
                            <MyCourseCard course={{ courseName: course.post_title, totalStudents: course.student_count, imageUrl: course.featured_image, rating: course.average_rating, slug: course.post_name, authorName: course.author_name, totalDuration: course.total_duration_in_seconds }} />
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid>
    )
}

export default AllSavedCourses

