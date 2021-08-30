import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Row from 'src/shared/Row/Row'
import styles from './GetTips.module.css'
const GetTips = () => {
    return (
        <Container Container maxWidth={true} className={styles.tips_container}>
            <Row>
                <Grid container spacing={2} className={styles.tips_content}>
                    <Grid container justifyContent="center">
                        <Typography variant="h3" component="p" align="center">
                            Get tips from our <br /> experts delivered to <br /> your inbox
                        </Typography>
                    </Grid>
                </Grid>
            </Row>
        </Container>
    )
}

export default GetTips
