import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        // marginBottom: theme.spacing(1),
        paddingBottom: 20
    },
    media: {
        height: 230,
    },
    workDateWrap: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        /* margin: auto 0; */
        height: "100%",
        "& time": {
            backgroundColor: "#553c8b",
            borderRadius: " 6px",
            color: "white",
            padding: "1rem",
            fontFamily: "Poppins-Regular",
            fontSize: "1.2rem",
            width: " 80%",
            textAlign: "center",
            /* margin-top: -100%; */
            marginBottom: "-20px",
        }
    },
    workTitle: {
        fontWeight: "600 !important",
        fontSize: " 1.8rem !important",
        marginTop: "20px !important",
        lineHeight: "1.5 !important",
    },
    author: {
        display: "flex",
    },
    authorInfo: {
        fontFamily: "Poppins-Regular",
        fontSize: "1.2rem",
        marginLeft: "1rem",
    }
}));

const SingleWorkshopCard = ({ customClass, data }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`../../${data.image}`}
                    title="Contemplative Reptile"
                >
                    <div className={classes.workDateWrap}>
                        <time>{data.time}</time>
                    </div>

                </CardMedia>
                <CardContent>

                    <Typography classes={{
                        root: classes.workTitle
                    }} gutterBottom variant="h5" component="h4">
                        {data.title}
                    </Typography>



                </CardContent>
            </CardActionArea>
            <CardActions>
                <div className={classes.author}>
                    <div className="name">
                        <Avatar alt="Cindy Baker" src={`../../${data.authorImage}`} />
                    </div>
                    <div className={classes.authorInfo}>
                        {`hosted by ${data.authorName} from`}
                        <br />
                        {data.authorPlatform}

                    </div>
                </div>
            </CardActions>
        </Card>
    );
}

export default SingleWorkshopCard

