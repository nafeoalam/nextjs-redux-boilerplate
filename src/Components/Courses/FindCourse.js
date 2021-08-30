import { Container, Typography, } from '@material-ui/core'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import ArrowBack from '@material-ui/icons/ChevronLeft';
import ArrowForward from '@material-ui/icons/ChevronRight';
import Grid from "@material-ui/core/Grid"

import Search from 'src/shared/Search/Search'


const FindCourse = () => {
    const theme = useTheme()
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <>
            <Container maxWidth="lg" style={{ padding: mediumScreen ? "5.7rem 1rem" : "9.7rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h2" align="center" style={{ fontFamily: "Poppins-Regular", fontWeight: 600, marginBottom: "3rem" }}>All Online Courses</Typography>
                <Search placeholder="Find a course..." style={{ padding: "2.4rem 3rem", maxWidth: "77rem" }} />
            </Container>
            {/* <div style={{ background: "#fff" }}>
                <Container maxWidth="lg">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Courses</h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h3>Total Courses-2</h3>
                            <ArrowBack />
                            <ArrowForward />
                        </div>
                    </div>
                    <div>
                        <Grid container spacing={3}>
                            <Grid item container xs={12} md={6} spacing={2}>
                                <Grid item xs={3}>
                                    <div>
                                        image
                                    </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <div>
                                        Take your career to the next level.
                                    </div>
                                </Grid>
                            </Grid >
                            <Grid item container xs={12} md={6} spacing={2}>
                                <Grid item xs={3}>
                                    <div>
                                        image
                                    </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <div>
                                        Take your career to the next level.
                                    </div>
                                </Grid>
                            </Grid >


                        </Grid>
                    </div>
                </Container>
            </div> */}
        </>
    )
}

export default FindCourse

