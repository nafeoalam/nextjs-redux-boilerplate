import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import AllSavedCourses from './AllSavedCourses/AllSavedCourses.js'
import MyLists from './MyLists/MyLists'
import MyWorkshops from './MyWorkshops/MyWorkshops'
import WatchHistory from './WatchHistory/WatchHistory'

const useStyles = makeStyles({
    switchButtonsContainer: {
        // overflowX: 'auto',
        borderBottom: '3px solid #CCCCCC',
        marginBottom: '2.4rem'
    },
    btn: {
        marginBottom:'-2px',
        cursor:'pointer',
        display: 'inline-block',
        padding: '1.6rem 4rem',
        fontWeight: '600',
        fontSize: '1.6rem',
        lineHeight: '2.8rem',
        color: '#292628',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        '&:hover': {
            // border: '3px solid #ED4266',
            color: '#ED4266'
        }
    },
    btnActive: {
        display: 'inline-block',
        border: '3px solid #ED4266',
        color: '#ED4266'
    }
})

const SwitchSectionButtons = ({ currentSection, setCurrentSection }) => {
    const classes = useStyles()

    return (
        <Grid container alignItems='center'>
            <Grid item xs={12} className={classes.switchButtonsContainer}>
                <div onClick={() => setCurrentSection('All Saved Courses')} className={currentSection === 'All Saved Courses' ? `${classes.btn} ${classes.btnActive}` : classes.btn}>All Saved Courses</div>
                <div onClick={() => setCurrentSection('My Lists')} className={currentSection === 'My Lists' ? `${classes.btn} ${classes.btnActive}` : classes.btn}>My Lists</div>
                <div onClick={() => setCurrentSection('My Workshops')} className={currentSection === 'My Workshops' ? `${classes.btn} ${classes.btnActive}` : classes.btn}>My Workshops</div>
                <div onClick={() => setCurrentSection('Watch History')} className={currentSection === 'Watch History' ? `${classes.btn} ${classes.btnActive}` : classes.btn}>Watch History</div>
            </Grid>
        </Grid>
    )
}

const MyCoursesSection = () => {
    const [currentSection, setCurrentSection] = useState('All Saved Courses')

    const switchSection = (selectedComponent) => {
        switch (selectedComponent) {
            case 'All Saved Courses':
                return <AllSavedCourses />
            case 'My Lists':
                return <MyLists />
            case 'My Workshops':
                return <MyWorkshops />
            case 'Watch History':
                return <WatchHistory />
            default:
                return <AllSavedCourses />
        }
    }

    return (
        <Grid>
            <SwitchSectionButtons currentSection={currentSection} setCurrentSection={setCurrentSection} />
            {switchSection(currentSection)}
        </Grid>
    )
}

export default MyCoursesSection