import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    tag_title: {
        paddingTop: theme.spacing(2)
    },
    tag_btn: {
      margin: theme.spacing(1)
    },
    
  }));
function PopularTags() {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4" component="p" align="left" className={classes.tag_title}> Popular Tags </Typography>
            <Grid container>
                <Button variant="outlined" className={classes.tag_btn} >
                    Education
                </Button>

                <Button variant="outlined" className={classes.tag_btn} >
                    Learning
                </Button>

                <Button variant="outlined" className={classes.tag_btn} >
                    Study in Abroad
                </Button>

                <Button variant="outlined" className={classes.tag_btn} >
                    Technology
                </Button>

                <Button variant="outlined" className={classes.tag_btn} >
                    Creative
                </Button>
                <Button variant="outlined" className={classes.tag_btn} >
                    Study
                </Button>
                
            </Grid>
        </>
    )
}

export default PopularTags
