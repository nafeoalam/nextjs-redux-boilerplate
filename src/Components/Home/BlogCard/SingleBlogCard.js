import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import moment from 'moment';
import React from 'react';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        paddingBottom: 10,
        marginRight: 10,
        marginLeft: 10
    },
    media: {
        height: 140,
    },
})
const SingleBlogCard = ({ customClasses, post }) => {
    const classes = useStyles();
    let strippedString = post.post_content?.replace(/(<([^>]+)>)/gi, "");
    if (strippedString.length > 30) strippedString = strippedString.substring(0, 100);
    return (
        <Card className={customClasses.cardRoot}>
            <Link href="/testsingleblog">
                <CardActionArea>
                    <CardMedia
                        className={customClasses.cardMedia}
                        image="/assets/images/blog/Rectangle.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <div className={customClasses.blogDate}>
                            <DateRangeIcon  style={{transform:'translateY(-1px)'}}/>
                            <time className={customClasses.date}> { moment(post.post_date).format("MMM Do YY") }   </time>
                        </div>

                        <Typography gutterBottom variant="h5" component="h2">
                            { post.post_title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{
                            fontSize:'1.6rem',
                            lineHeight:'2.2rem',
                            color:'#000000'
                        }}>
                            {strippedString}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>

        </Card>
    )
}

export default SingleBlogCard
