import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
const useStyles = makeStyles({
    root: {
        width: '340px',
        paddingBottom: '10px',
        marginRight: '25px',
        marginLeft: '25px',
        borderRadius: 5,
    },
    title: {
        marginBottom: '15px',
        minHeight: '48px'
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
        marginLeft: "20px"
    },
    btn: {
        padding: '4px 12px',
        color: '#2d2d2d',
        marginBottom: '10px',
        marginLeft: '8px'
    }
});

const BlogCard = ({ post }) => {
    const classes = useStyles();

    const { title, short_description, imageUrl, author, post_date, slug } = post ? post
        : {
            'title': "Sed suscipit dictum nam feugiat habitasse blandit at lacus et.",
            'short_description': "Rhoncus in orci eleifend tellus quam pulvinar mi molestie gravida. Velit imperdiet...",
            'imageUrl': "/assets/images/cards/blog_one.png",
            'author': 'Admin',
            'post_date': 'Apr 20, 2021'
        }
    let strippedString = short_description?.replace(/(<([^>]+)>)/gi, "");
    if (strippedString.length > 30) strippedString = strippedString.substring(0, 100);
    const defaultImg = "/assets/images/cards/blog_one.png"
    return (
        <>
            <Link href={`/${slug}`}>
                <Card className={classes.root} elevation={5} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="160"
                            image={imageUrl == false ? defaultImg : imageUrl}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <div className={classes.header}>
                                <div className={classes.adminAvatar}>
                                    <PermIdentityOutlinedIcon />
                                    <Typography variant="subtitle1" component="p"> {author} </Typography>
                                </div>
                                <div className={classes.blogDate}>
                                    <DateRangeIcon />
                                    <Typography variant="subtitle1" component="p"> {moment(post_date).format("MMM Do YY")} </Typography>
                                </div>
                            </div>

                            <Typography gutterBottom variant="h5" component="p">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {strippedString}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.btn} size="small" variant="outlined" disableElevation>
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            </Link>
        </>
    );
};

export default BlogCard;