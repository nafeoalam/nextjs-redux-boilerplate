import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import CompanyCard from 'src/shared/Card/ComapanyCard'
import Row from 'src/shared/Row/Row'
import CheckHelper from 'src/shared/_Helper/check.helper'
import styles from './CompanyUpdates.module.css'
const CompanyUpdates = ({ latest_news }) => {
    return (
        <Container maxWidth={true} className={styles.company_container}>
            <Row>
                <Grid container spacing={2} className={styles.company_content}>
                    <Grid container justifyContent="center">
                        <Typography variant="h3" component="p" align="center" style={{ padding: '20px 0' }}> Company Updates  </Typography>
                    </Grid>
                    {
                        CheckHelper.hasArrayItem(latest_news) ? latest_news.map((news, index) => (
                            <Grid key={news.ID} container justifyContent="center" item xs={12} md={3} lg={3}>
                                <CompanyCard news={news} />
                            </Grid>
                        )) : ""
                    }
                    {/* <Grid container justifyContent="center" item xs={12} md={3} lg={3}>
                        <CompanyCard />
                    </Grid>
                    <Grid container justifyContent="center" item xs={12} md={3} lg={3}>
                        <CompanyCard />
                    </Grid>
                    <Grid container justifyContent="center" item xs={12} md={3} lg={3}>
                        <CompanyCard />
                    </Grid> */}
                    <Grid container justifyContent="center" item>
                        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}> View All </Button>
                    </Grid>
                </Grid>
            </Row>
        </Container>

    )
}

export default CompanyUpdates
