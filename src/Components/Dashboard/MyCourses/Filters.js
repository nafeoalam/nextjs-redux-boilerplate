import { FormControlLabel, Grid, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    filterTitle: {
        color: '#292628',
        fontWeight: '600',
        fontSize: '2.4rem',
        lineHeight: '3.6rem',
        padding: '1.6rem 0'
    },
    radioInput: {
        transform: 'translateY(-1px)'
    },
    select: {
        minWidth: '300px',
        padding: '1.6rem 4.2rem',
        border: '1px solid #5A5755',
        fontSize: '2rem !important',
        borderRadius: '.5rem'
    }
})

const Filters = () => {
    const classes = useStyles()

    const [classLength, setClassLength] = useState(null)
    const [status, setStatus] = useState(null)
    const [category, setCategory] = useState('Business')

    console.log(classLength, status, category)

    const handleClassLengthChange = (event) => {
        setClassLength(event.target.value)
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    return (
        <Grid container justifyContent='center' style={{ marginBottom: '3.6rem' }}>
            <Grid item xs={6}>
                <h4 className={classes.filterTitle}>Class Length</h4>

                <RadioGroup style={{ display: 'block' }} aria-label="course length" name="courseLength" value={classLength} onChange={handleClassLengthChange}>
                    <FormControlLabel

                        value='1'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="< 15 min"
                        labelPlacement="end"

                    />
                    <FormControlLabel
                        value='2'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="15 - 30 min"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value='3'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="30 - 60 min"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value='4'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="> 60 min"
                        labelPlacement="end"
                    />
                </RadioGroup>

            </Grid>
            <Grid item xs={6}>
                <h4 className={classes.filterTitle}>Status</h4>
                <RadioGroup style={{ display: 'block' }} aria-label="course length" name="courseLength" value={status} onChange={handleStatusChange}>
                    <FormControlLabel
                        //Not yet started
                        value='1'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="Not yet started"
                        labelPlacement="right"
                    />

                    <FormControlLabel
                        //In Progress
                        value='2'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="In Progress"
                        labelPlacement="right"
                    />

                    <FormControlLabel
                        //Finished
                        value='3'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="Finished"
                        labelPlacement="right"
                    />

                    <FormControlLabel
                        //Completed
                        value='4'
                        control={<Radio color="primary" className={classes.radioInput} />}
                        label="Completed"
                        labelPlacement="right"
                    />
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
                <h4 className={classes.filterTitle}>Category</h4>
                <select name="categories" id="category" className={classes.select} onChange={handleCategoryChange}>
                    <option value="">Select...</option>
                    <option value="business">Business</option>
                    <option value="self-development">Self Development</option>
                </select>
            </Grid>
        </Grid>
    )
}

export default Filters
