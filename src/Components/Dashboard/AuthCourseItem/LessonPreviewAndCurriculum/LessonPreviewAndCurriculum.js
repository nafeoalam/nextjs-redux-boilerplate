import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import singleCourse from '../../../../../public/assets/json_data/single_course.json'
import ModuleAccordion from './ModuleAccordion'
import CheckHelper from 'src/shared/_Helper/check.helper'
import course from '../../../../../public/assets/json_data/single_course.json'
import Vimeo from "@u-wave/react-vimeo"
import Link from 'next/link'
import { useState } from 'react'

const useStyles = makeStyles({
    title: {
        width: '100% !important',
        textAlign: 'left'
    },
    subTitle: {
        width: '100% !important',
        textAlign: 'left',
        color: '#292628',
        fontSize: '1.6rem',
        lineHeight: '2.2rem',
    },
    link: {
        cursor: 'pointer',
        fontWeight: 'bold !important',
        fontSize: '1.4rem !important',
        lineHeight: '1.8rem !important',
        color: ' #553C8B',
        '& :hover': {
            textDecoration: 'underline',
            color: 'red'
        }
    },
    summaryContainer: {
        minHeight: '7.5rem',
        padding: '0 1.6rem',
        background: '#FFFFFF'
    },
    totalModule: {
        fontWeight: '600',
        fontSize: '1.8rem',
        lineHeight: '2.7rem',
        color: '#553C8B'
    },
    accordionContainer: {
        maxHeight: '380px',
        overflow: 'scroll'
    }
})

const LessonPreviewAndCurriculum = () => {
    const classes = useStyles()

    const [unitItem, setUniItem] = useState({ link: 'https://vimeo.com/575778764' })

    const handleUnitItemChange = (item) => {
        setUniItem(item)
    }

    return (
        <Container>
            <Grid container justifyContent='center' spacing={3}>
                <h2 className={classes.title}>{singleCourse.title}</h2>
                <p className={classes.subTitle}>{singleCourse?.author?.name}</p>
                <Grid item sm={12} md={8}>
                    <Vimeo
                        style={{ padding: "1rem" }}
                        video={unitItem.link}
                        // autoplay={true}
                        muted={false}
                        showPortrait
                        responsive={true}
                        showTitle={false}
                        controls={true}
                    // onEnd={handleVideoEnd}
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <Grid item container justifyContent='space-between' alignItems='center' className={classes.summaryContainer}>
                        <h3 className={classes.totalModule}>{singleCourse.total_curriculums}{' Modules'}</h3>
                        <Link href='/dashboard/notes'>
                            <Typography className={classes.link} >
                                View My Notes
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.accordionContainer}>

                        {CheckHelper.hasArrayItem(singleCourse?.curriculum) && singleCourse?.curriculum.map((module, index) => {
                            return (
                                <ModuleAccordion
                                    key={module.id}
                                    module={module}
                                    moduleNo={index + 1}
                                    handleUnitItemChange={handleUnitItemChange}
                                />
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LessonPreviewAndCurriculum
