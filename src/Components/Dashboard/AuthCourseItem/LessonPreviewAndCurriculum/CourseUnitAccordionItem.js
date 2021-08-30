import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { Grid, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import LockOpenIcon from '@material-ui/icons/LockOpen'

const useStyles = makeStyles({
    unitTitle: {
        fontWeight: '600',
        fontSize: '1.3rem',
        lineHeight: '1.9rem',
        color: '#201E1E'
    },
})

const CourseUnitAccordionItem = ({ unit, handleUnitItemChange }) => {
    const classes = useStyles()
    return (
        <Grid container justifyContent='space-between' alignItems='center' className={classes.accordionItem} onClick={() => handleUnitItemChange(unit)} style={{ cursor: 'pointer' }}>
            <Grid item >
                <Grid container direction='column'>
                    <h4 className={classes.unitTitle}>{unit.title}</h4>
                    <Grid item xs={12}>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <PlayCircleFilledIcon />
                            <h5 style={{ marginLeft: '1.6rem' }}>{unit.duration}</h5>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <LockOpenIcon fontSize='large' />
        </Grid>
    )
}

export default CourseUnitAccordionItem