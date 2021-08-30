import { Grid, Typography, Paper, Avatar, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Rating from '@material-ui/lab/Rating';

import Styles from "./CourseReview.module.css"

const useStyles = makeStyles((theme) => ({
  reviewSection: {
    backgroundColor: "#F4F4F4",
    padding: theme.spacing(6, 0)
  }
}))
const CourseReview = () => {
  const classes = useStyles()
  return (
    <section className={`sectionWrapper ${classes.reviewSection}`}>
      <Container>
        <Typography variant="h2" align="center" className="sectionTitle mb-5">
          Our Students Reviews
        </Typography>
        <Grid container justifyContent="space-between" spacing={5}>
          <Grid item md={4}>
            <Paper className={Styles.singleReview}>
              <div className={Styles.topSectionReview}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <div className="ml-1">
                  <Typography variant="h4" style={{
                    fontFamily: "Poppins-Medium"
                  }}>
                    Alex Brinkman
                  </Typography>
                  <Rating size="large" name="read-only" value={5} readOnly />
                </div>
              </div>
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit rhoncus varius molestie enim. Nam a id pretium eros porta vulputate ipsum, enim. Mi in lectus sit lacus, euismod felis praesent sit in. Est congue vulputate ullamcorper vulputate tristique pellentesque turpis vel porttitor. Eu morbi massa vitae mus.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper className={Styles.singleReview}>
              <div className={Styles.topSectionReview}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <div className="ml-1">
                  <Typography variant="h4" style={{
                    fontFamily: "Poppins-Medium"
                  }}>
                    Alex Brinkman
                  </Typography>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit rhoncus varius molestie enim. Nam a id pretium eros porta vulputate ipsum, enim. Mi in lectus sit lacus, euismod felis praesent sit in. Est congue vulputate ullamcorper vulputate tristique pellentesque turpis vel porttitor. Eu morbi massa vitae mus.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper className={Styles.singleReview}>
              <div className={Styles.topSectionReview}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <div className="ml-1">
                  <Typography variant="h4" style={{
                    fontFamily: "Poppins-Medium"
                  }}>
                    Alex Brinkman
                  </Typography>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit rhoncus varius molestie enim. Nam a id pretium eros porta vulputate ipsum, enim. Mi in lectus sit lacus, euismod felis praesent sit in. Est congue vulputate ullamcorper vulputate tristique pellentesque turpis vel porttitor. Eu morbi massa vitae mus.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CourseReview
