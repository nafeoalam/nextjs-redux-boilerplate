import { makeStyles } from '@material-ui/core'
import { Box, Button, Container, Grid, Paper } from '@material-ui/core'
import React from 'react'

const PartnerCard = ({ imgSrc, imgAlt }) => {

    return (
        <Paper
            className='partner-card'
        >
            <Grid
                container
                direction='row'
                className='partner-logo-container'
                justifyContent='center'
                alignItems='center'
            >
                <img src={imgSrc} alt={imgAlt} />
            </Grid>
        </Paper>
    )
}

const PrimaryButton = ({ onClick, btnText = 'ENTER' }) => {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '100px', background: ' #ED4266',color:'#FFFFFF' }} >
            {btnText}
        </Button>
    )
}

const EarnCertificate = () => {

    return (
        <Container className='earn-certificate-container' >

            <div className='promo-certificate-parent'>
                <div className='earn-certificate-image-container'>
                    <div className='earn-certificate-eclipse'>
                        <img src="/assets/images/earn-certificate-eclipse.png" alt="Eclipse" />
                    </div>
                    <div className="promo-certificate-container">
                        <img src="/assets/images/promo-certificate.png" alt="Certificate" />
                    </div>
                </div>
            </div>

            <Container maxWidth='md'>

                <h2 className='earn-certificate-title'>Get your accredited certificate</h2>

                <p className='earn-certificate-paragraph'>Learning & acquiring new skills is more rewarding when you can bolster your resume with recognized certificates.</p>

                <Grid container alignItems='center' justifyContent='center' style={{ marginBottom: '24px' }}>
                    <PrimaryButton onClick={() => console.log('Cliked')} btnText='Learn More' />
                </Grid>

                <Grid container spacing={6}>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/cpd-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/iirsm-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/iao-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/athe-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/qls-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/ukrlp-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/peoplecert-logo.png' />
                    </Grid>
                    <Grid item container justifyContent='center' xs={12} sm={3} >
                        <PartnerCard imgSrc='/assets/images/icons/ocn-logo.png' />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default EarnCertificate