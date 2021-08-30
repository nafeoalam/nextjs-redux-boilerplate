import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import moment from 'moment';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginTop: theme.spacing(2)
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 185,
    },
    header: {
        display: "flex",
        marginBottom: '15px'
    },

    adminAvatar: {
        display: "flex",
        alignItems: "center",
    },
    blogDate: {
        display: "flex",
        alignItems: "center",
    },
  }));

const PopularNewsCard = ({ post }) => {
    const classes = useStyles();
    const { title, imageUrl, post_date, slug } = post ? post
        : {
            'title': "Sed suscipit dictum nam feugiat habitasse blandit at lacus et.",
            'imageUrl': "/assets/images/cards/blog_one.png",
            'post_date': 'Apr 20, 2021'
        }
    const default_img = "/assets/images/cards/blog_one.png"
    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={ imageUrl ? imageUrl : default_img }
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <div className={classes.header}>
                            <div className={classes.blogDate}>
                                <DateRangeIcon />
                                <Typography variant="subtitle1" component="p"> {moment(post_date).format("MMM Do YY")} </Typography>
                            </div>
                        </div>
                        <Typography component="h5" variant="h5">
                            { title }
                        </Typography>
                    </CardContent>
                </div>
                
            </Card>
        </>
    );
};

export default PopularNewsCard;