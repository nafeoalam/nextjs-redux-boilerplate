import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import MyCoursesSection from './MyCoursesSection'

const useStyles = makeStyles({
    pageTitle: {
        fontWeight: '600',
        fontSize: '3.6rem',
        lineHeight: '4.8rem',
        color: '#292628',
        paddingTop: '3.6rem',
        paddingBottom: '3.6rem',
    }
})

const MyCoursesBlock = () => {
    const classes = useStyles()

    return (
        <Container>
            <Grid container spacing={0} style={{ paddingBottom: '3.6rem' }}>
                <Grid item xs={12}>
                    <h1 className={classes.pageTitle}>My Courses</h1>
                </Grid>
                <Grid item xs={12}>
                    <MyCoursesSection />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MyCoursesBlock