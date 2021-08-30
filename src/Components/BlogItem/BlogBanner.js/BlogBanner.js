import { Breadcrumbs, Container, Grid, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import React from 'react';
import Row from 'src/shared/Row/Row';
import styles from './BlogBanner.module.css';
const BlogBanner = ({ title }) => {
    return (
        <Container maxWidth={true} className={styles.banner_container}>
            <Row>
                <Grid className={styles.banner_content}>
                    <Breadcrumbs style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }} separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb">
                        <Link href="/blog">
                            Home
                        </Link>
                        <Typography variant="h5" color="textPrimary">Single Blog</Typography>
                    </Breadcrumbs>
                    <Typography variant='h2' component="h4" align="center" gutterBottom>
                        { title }
                    </Typography>
                </Grid>

            </Row>
        </Container>
    )
}

export default BlogBanner
