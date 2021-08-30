import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Row from 'src/shared/Row/Row';
import AgeSelect from './AgeSelect';
import Agreement from './Agreement';
import FinalStep from './FinalStep';
import FlexibleClasses from './FlexibleClasses';
import GenderSelect from './GenderSelect';
import styles from './SignUp.module.css';
import SingleChoice from './SingleChoice';
import StudentId from './StudentId';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        margin: '0 auto',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

}));

function getSteps() {
    return ['', '', '', '', '', '', '', ''];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (<SingleChoice />)
        case 1:
            return (<FlexibleClasses />)
        case 2:
            return (<StudentId />)
        case 3:
            return (<Agreement />)
        case 4:
            return (<GenderSelect />)
        case 5:
            return (<AgeSelect />)
        case 6:
            return (<FinalStep />)
        default:
            return 'Unknown stepIndex';
    }
}
const SignUpStep = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Row>
            <Grid>
                <div className={styles.step_container}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel> {label}  </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed</Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}

                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Grid>
        </Row>
    );
};

export default SignUpStep;