import { Grid } from '@material-ui/core'
import React from 'react'
import CompanyBanner from './CompanyBanner/CompanyBanner'
import CompanyHtml from './CompanyHtml/CompanyHtml'

const CompanyItemBlock = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid container item xs={12}>
                    <CompanyBanner />
                </Grid>
                <Grid container item xs={12}>
                    <CompanyHtml />
                </Grid>
            </Grid>
        </>
    )
}

export default CompanyItemBlock
