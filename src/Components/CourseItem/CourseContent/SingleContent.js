import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Divider } from '@material-ui/core';
import { removeHtmlTag } from 'src/shared/_Helper/removeHtmTag';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const SingleContent = ({ customClass, module, index }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const [lessons, setLessons] = useState(module.units)
    const lessonIcon = (iconType) => {
        switch (iconType) {
            case "play":
                return <PlayCircleOutlineIcon style={{
                    color: "red",
                    marginRight: "1rem"
                }} fontSize="large" />
                break;
            case "text-document":
                return <DescriptionIcon
                    style={{
                        color: "red",
                        marginRight: "1rem"
                    }}
                    fontSize="large" />
                break;

            default:
                return <AssignmentIcon
                    style={{
                        color: "red",
                        marginRight: "1rem"
                    }}

                    fontSize="large" />
                break;
        }
    }
    return (
        <div className={classes.root}>
            <Accordion className={customClass.single} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={expanded ? customClass.open : "black"} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // className={}
                    classes={{
                        root: expanded ? `${customClass.contentHeading} ${customClass.open}` : customClass.contentHeading,
                        content: customClass.summaryContent
                    }}

                >
                    <Typography variant="h4" component="h4" style={{ textTransform: "capitalize" }}>module {index + 1}</Typography>
                    <Typography component="p" >{module.title}</Typography>


                </AccordionSummary>
                <AccordionDetails className={customClass.details}>
                    <div className="detailsWrap w-100">
                        {lessons?.map((lesson, index) => (<> <div key={lesson.id} className={customClass.singleDetails}>

                            <Typography component="h3"
                                style={{
                                    flexGrow: "1",
                                    display: "flex",
                                    alignItems: "center",
                                    maxWidth: "80%"
                                }}
                                paragraph variant="h5">{lessonIcon(lesson.icon)}{lesson.title}</Typography>

                            {/* <Typography component="p" paragraph variant="h6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography> */}
                            {lesson.icon == "text-document" ? "" : <span>{removeHtmlTag(lesson.duration)}</span>}

                            <Divider />
                        </div>


                        </>
                        ))}
                    </div>

                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default SingleContent