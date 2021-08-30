import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Row from 'src/shared/Row/Row'
import styles from './SignUpBanner.module.css'
const SignUpBanner = () => {
    return (
        <Container Container maxWidth={true} className={styles.signup_container}>
            <Row>
                <Grid className={styles.signup_content}>
                    <Grid>
                        <Typography variant="h3" component="p" align="left" className={styles.title}>
                            Join 30 million <br /> students who have <br /> a head start!
                        </Typography>
                        <Typography variant="h6" component="p" align="left" className={styles.sub_title}>
                            Get 4 weeks free with any course
                        </Typography>
                        <Button variant="contained" color="primary">
                            Sign Up For Free
                        </Button>
                    </Grid>
                </Grid>
            </Row>
        </Container>
    )
}

export default SignUpBanner
