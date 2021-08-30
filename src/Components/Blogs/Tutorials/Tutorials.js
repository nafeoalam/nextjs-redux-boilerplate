import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import TutorialCard from 'src/shared/Card/TutorialCard'
import Row from 'src/shared/Row/Row'
import CheckHelper from 'src/shared/_Helper/check.helper'
import styles from './Tutorials.module.css'
const Tutorials = ({ latest_tutorials }) => {
    return (
        <Container Container className={styles.tutorial_container}>
            <Row>
                <Grid container spacing={2} className={styles.tutorial_content}>
                    <Grid container justifyContent="center">
                        <Typography variant="h3" component="p" align="center" style={{ padding: '20px 0' }}> Tutorials  </Typography>
                    </Grid>

                    { 
                        CheckHelper.hasArrayItem(latest_tutorials) ? latest_tutorials.map((tutorial, index) => (
                            <Grid key={tutorial.ID} container justifyContent="center" item xs={12} md={3} lg={3}>
                                <TutorialCard tutorial={tutorial} />
                            </Grid>
                        )) : ""
                    }
                    <Grid container justifyContent="center" item>
                        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}> View All </Button>
                    </Grid>
                </Grid>
            </Row>
        </Container>

    )
}

export default Tutorials