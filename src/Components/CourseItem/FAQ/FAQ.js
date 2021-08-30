//Accordion Material
import React, { useState } from 'react';
import SingleFaq from './SingleFaq'
import styles from './FAQ.module.css'
import { Container, Typography } from '@material-ui/core';

const FAQ = () => {

    return (
        <section className="sectionWrapper">
            <Container>
                <div >
                    <Typography variant="h2"
                        className={`${styles.faqTitle} sectionTitle`}
                    >
                        FAQs
                    </Typography>


                </div>
                <SingleFaq customClass={styles} />
                <SingleFaq customClass={styles} />
                <SingleFaq customClass={styles} />
                <SingleFaq customClass={styles} />
                <SingleFaq customClass={styles} />
            </Container>
        </section>
    );
}
export default FAQ