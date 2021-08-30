import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import React from 'react';

const useStyles = makeStyles({
    root: {
        width: '270px',
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

const CompanyCard = ({ news }) => {
    const classes = useStyles();
    const {featured_image, post_date, post_title, post_name} = news

    const default_img = "/assets/images/cards/company_one.png"

    return (
        <>
            <Card className={classes.root} elevation={5} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="160"
                        image={ featured_image ? featured_image : default_img }
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="subtitle1" component="p"> {moment(post_date).format("MMM Do YY")} </Typography>

                        <Typography gutterBottom variant="h5" component="p">
                            { post_title }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default CompanyCard;