//Accordion Material Needed

import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Content from './Content'
import Brochure from './Brochure'
import styles from './CourseContent.module.css'
function CourseContent({ courseModule }) {
    return (
        <section className="sectionWrapper w-100">
            <div className={styles.main}>
                <Typography
                    variant="h3" gutterBottom className="sectionTitle mb-3"
                >Course Content</Typography>
                <Grid container  >


                    <Content courseModule={courseModule} customClass={styles} />

                </Grid>
            </div >
        </section>
    )
}

export default CourseContent
