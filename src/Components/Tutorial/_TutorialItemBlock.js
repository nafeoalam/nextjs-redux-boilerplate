import { Grid } from '@material-ui/core'
import React from 'react'
import TutorialBanner from './TutorialBanner/TutorialBanner'
import TutorialHtml from './TutorialHtml/TutorialHtml'

const TutorialItemBlock = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid container item xs={12}>
                    <TutorialBanner />
                </Grid>
                <Grid container item xs={12}>
                    <TutorialHtml />
                </Grid>
            </Grid>
        </>
    )
}

export default TutorialItemBlock
