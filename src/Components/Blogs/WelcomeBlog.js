import { Breadcrumbs, Container, Grid, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import Row from 'src/shared/Row/Row';
import styles from 'src/styles/WelcomeBlog.module.css';
const WelcomeBlog = () => {
    return (
        <Container maxWidth={true} className={styles.blog_container}>
            <Row>
                <Grid className={styles.blog_content}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Home
                        </Link>
                        <Typography variant="h5" color="textPrimary">Blog</Typography>
                    </Breadcrumbs>
                    <Typography variant='h2' component="h4" align="center" gutterBottom>
                        Welcome to the One Education Blog
                    </Typography>
                    <Typography variant='h6' component="p" align="center">
                        Subscribe for the latest updates delivered straight to your inbox
                    </Typography>
                </Grid>

            </Row>
        </Container>
    )
}

export default WelcomeBlog
