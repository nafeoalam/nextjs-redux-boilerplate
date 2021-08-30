import React from 'react'
import { Container, Grid } from '@material-ui/core'
import HowItWorksItemCard from './HowItWorksItemCard'

function HowItWorks() {
    return (
        <Grid container className='single-course-howitworks-container' >

            <Container maxWidth='md'>

                <h2 className='single-course-howitworks-title'>How It Works</h2>

                <Grid container spacing={5}>
                    <Grid item container justifyContent='center' xs={12} sm={6} md={4} >
                        <HowItWorksItemCard title='Course Length' subtitle='2 weeks' imgSrc='/assets/images/icons/course-length-icon.png' imgAlt='Course length icon' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={6} md={4} >
                        <HowItWorksItemCard title='Program Duration' subtitle='3 months' imgSrc='/assets/images/icons/program-duration-icon.png' imgAlt='Program duration icon' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={6} md={4} >
                        <HowItWorksItemCard title='Class Size' subtitle='Under 40 students' imgSrc='/assets/images/icons/class-size-icon.png' imgAlt=' Class size icon' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={6} md={4} >
                        <HowItWorksItemCard title='Effort' subtitle='3-5 hours per week' imgSrc='/assets/images/icons/effort-icon.png' imgAlt='Effort icon' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={6} md={4} >
                        <HowItWorksItemCard title='Format' subtitle='100% online' imgSrc='/assets/images/icons/format-icon.png' imgAlt='Format icon' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={6} md={4} >
                        <HowItWorksItemCard title='Model' subtitle='Instructor-led' imgSrc='/assets/images/icons/model-icon.png' imgAlt='Model icon' />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default HowItWorks
