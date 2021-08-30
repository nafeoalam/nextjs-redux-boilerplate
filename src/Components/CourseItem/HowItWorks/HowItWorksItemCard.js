import { Grid, Paper } from "@material-ui/core"

const HowItWorksItemCard = ({ title, subtitle, imgSrc, imgAlt }) => {
    return (
        <Paper
            className='how-it-works-course-page-card'
        >
            <Grid
                container
                className='how-it-works-course-page-card-item-container'
                justifyContent='center'
                alignItems='center'
            >
                <div>
                    <Grid item container justifyContent='center' xs={12}>
                        <img src={imgSrc} alt={imgAlt} />
                    </Grid>
                    <Grid container justifyContent='center' item xs={12}>
                        <p className='how-it-works-course-page-card-title'>{title}</p>
                    </Grid>
                    <Grid container justifyContent='center' item xs={12}>
                        <p className='how-it-works-course-page-card-subtitle'>{subtitle}</p>
                    </Grid>
                </div>
            </Grid>
        </Paper>
    )
}

export default HowItWorksItemCard