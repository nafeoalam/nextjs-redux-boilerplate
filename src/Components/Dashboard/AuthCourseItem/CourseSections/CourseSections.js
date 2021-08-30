import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AboutCourse from './AboutCourse/AboutCourse';
import NotesCourse from './NotesCourse/NotesCourse';
import ReviewsCourse from './ReviewsCourse/ReviewsCourse';

const useStyles = makeStyles((theme) => ({
    btn: {
        background: '#D6D8FF',
        color: '#553C8B',
        margin: theme.spacing(1),
        '&:hover': {
            background: '#553C8B',
            color: '#fff'
        },
    }
}));

const CourseSections = () => {
    const classes = useStyles();
    const [currentSection, setCurrentSection] = useState('Reviews')

    const SwitchSection = (selectedComponent) => {
        switch (selectedComponent) {
            case 'About':
                return <AboutCourse />;
            case 'Reviews':
                return <ReviewsCourse />;
            case 'Notes':
                return <NotesCourse />;
            default:
                return <ReviewsCourse />;
        }
    }


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Button onClick={() => setCurrentSection('About')} variant="contained" className={classes.btn}>About</Button>
                <Button onClick={() => setCurrentSection('Reviews')} variant="contained" className={classes.btn}>Reviews</Button>
                <Button onClick={() => setCurrentSection('Notes')} variant="contained" className={classes.btn}>Notes</Button>
            </Grid>
            <Grid>
                {SwitchSection(currentSection)}
            </Grid>
        </>
    )
}

export default CourseSections
