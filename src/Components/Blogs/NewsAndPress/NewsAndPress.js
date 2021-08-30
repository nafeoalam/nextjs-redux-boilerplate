import { Button, Container, Grid } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';
import Row from 'src/shared/Row/Row';
import styles from './NewsAndPress.module.css';
const NewsAndPress = () => {
    return (
        <Container maxWidth={true} className={styles.news_container}>
            <Row>
                <Grid container spacing={2} className={styles.news_content}>
                    <Grid container justifyContent="center">
                        <div className={styles.img_container}>
                            <img src="/assets/images/cards/news_press.png" alt="img" style={{ width: '100%' }} />
                            <div className={styles.text_block}>
                                <Button variant="contained" color="secondary" className={styles.top_btn}>
                                    News & Press
                                </Button>
                                <p className={styles.title}>One Education Reports Online Learning <br /> ‘New Normal‘ Post-Lockdown.</p>
                                <p className={styles.sub_title}> Learning online is predicted to continue its increase <br /> post-lockdown…</p>
                                <p className={styles.author_title}>Publisher - www.prnewswire.com</p>
                                <Button
                                    variant="text"
                                    color="primary"
                                    className={styles.bottom_btn}
                                    endIcon={<ChevronRightIcon />}
                                    disableElevation
                                >
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Row>
        </Container>
    )
}

export default NewsAndPress