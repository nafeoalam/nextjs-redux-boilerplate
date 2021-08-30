import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckHelper from 'src/shared/_Helper/check.helper'
import CourseUnitAccordionItem from './CourseUnitAccordionItem'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    moduleAccordion: {
        maxHeight: '250px !important'
    },
    unitTitle: {
        fontWeight: '600',
        fontSize: '1.3rem',
        lineHeight: '1.9rem',
        color: '#201E1E'

    },
    moduleTitle: {
        fontWeight: '600',
        fontSize: '1.5rem',
        lineHeight: '2.2rem',
        color: '#000000',
        textTransform: 'capitalize'
    },
    moduleSubTitle: {
        fontWeight: '500',
        fontSize: '1.4rem',
        lineHeight: '2.2rem',
        color: '#000000',
        textTransform: 'capitalize'
    },
    single: {
        borderRadius: '0'
    },

    open: {
        backgroundColor: ' #e5fbff !important',
        marginBottom: '0 !important'
    },
    summaryContent: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 !important',
        padding: '1.5rem !important',
    },
    details: {
        padding: ' 2.5rem !important',
        backgroundColor: ' #f4f4f4'
    },

}))

const ModuleAccordion = ({ module, moduleNo = 1, handleUnitItemChange }) => {

    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <>
            <Accordion className={classes.moduleAccordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={expanded ? <ExpandLessIcon color="primary" /> : <ExpandMoreIcon color="primary" />}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{
                        root: expanded && `${classes.open}`,
                        content: classes.summaryContent
                    }}

                >
                    <>
                        <Typography variant="h4" component="h4" className={classes.moduleTitle}>
                            Module {moduleNo}
                        </Typography>

                        <Typography component="p" className={classes.moduleSubTitle} >{module.title}</Typography>
                    </>
                </AccordionSummary>

                <AccordionDetails className={classes.details}>
                    {CheckHelper.hasArrayItem(module.units) && module?.units.map(unit => {
                        return <CourseUnitAccordionItem key={unit.id} handleUnitItemChange={handleUnitItemChange} unit={unit} />
                    })}

                </AccordionDetails>
            </Accordion>

        </>


    )
}

export default ModuleAccordion