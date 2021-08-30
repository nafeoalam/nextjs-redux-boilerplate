import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Divider } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const SingleFaq = ({ customClass }) => {
    const classes = useStyles();
    const [expand, setExpand] = useState(false)
    const onAccordion = () => {

        setExpand(!expand)
    }
    return (
        <Accordion square onClick={onAccordion} className={customClass.faqWrapper}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon className={expand ? customClass.open : "black"} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                    root: customClass.faqOnHide
                }}
                className={expand ? customClass.faqOpen : "hide"}
            >
                <Typography variant="h5" className={expand ? customClass.open : ""} >Details about certification</Typography>
            </AccordionSummary>
            <AccordionDetails className={customClass.allWrap}>
                <div >
                    <div className={customClass.detailsWrap}>


                        <Typography className={customClass.detailsTitle} paragraph variant="h4">
                            <DoubleArrowIcon style={{ color: "#ED4266", marginRight: "10px" }} />
                            Endorsed Certificate of Achievement from the Quality Licence Scheme
                        </Typography>
                        <Typography component="p"
                            paragraph
                            variant="h5"
                        >    After successfully completing the course, learners will be able to order an endorsed certificate as proof of their new achievement. Endorsed certificates can be ordered and get delivered to your home by post for only £129. There is an additional £10 postage charge for international students.

                        </Typography>
                    </div>
                    <Divider />
                    <div className={customClass.detailsWrap}>


                        <Typography className={customClass.detailsTitle} paragraph variant="h4">
                            <DoubleArrowIcon style={{ color: "#ED4266", marginRight: "10px" }} />
                            Endorsed Certificate of Achievement from the Quality Licence Scheme
                        </Typography>
                        <Typography component="p"
                            paragraph
                            variant="h5"
                        >    After successfully completing the course, learners will be able to order an endorsed certificate as proof of their new achievement. Endorsed certificates can be ordered and get delivered to your home by post for only £129. There is an additional £10 postage charge for international students.

                        </Typography>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default SingleFaq
