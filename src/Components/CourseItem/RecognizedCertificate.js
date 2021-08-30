import { Container, Grid } from '@material-ui/core'
import React from 'react'

const RecognizedCertificate = () => {
    return (
        <div className='recognized-certificate-container'>
            <Container maxWidth='md' >
                <h2 className='recognized-certificate-title'>Industry Recognized Certification from One Education</h2>
                <p className='recognized-certificate-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa pellentesque magna pellentesque feugiat at. Auctor blandit semper nibh placerat mauris vulputate. Metus, leo massa vulputate risus. Malesuada netus quis lectus sit. Vitae arcu fringilla mi, sed tempor tristique. Urna gravida nam tristique id turpis pharetra. Elit nunc faucibus feugiat sit ut. Sit massa gravida arcu amet massa mauris risus egestas.</p>

                <Grid container spacing={6} >
                    <Grid item container xs={12} sm={7} className='course-page-certificate-container'>
                        <img src="/assets/images/course-page-certificate.webp" alt="Certificate image" />
                    </Grid>
                    <Grid item container xs={12} sm={5} className='course-page-transcript-container'>
                        <img src="/assets/images/course-page-transcript.png" alt="Transacript image" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RecognizedCertificate
