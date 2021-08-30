import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.default,
        paddingLeft: '50px'
    },
    category_container: {
        padding: '10px 0'
    },
    category: {
        fontWeight: 600,
        padding: '5px 0',
        '&:hover': {
            cursor: 'pointer',
            color: '#ED4266'
        }
    }
}));

const NewsCategories = () => {
    const classes = useStyles();

    return (
        <div className={classes.category_container}>
            <Typography variant="h4" component="p" gutterBottom> News Categories </Typography>

            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem>
                    <Typography variant="h5" component="p" gutterBottom className={classes.category}> Education (13) </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5" component="p" gutterBottom className={classes.category}>  Study (15) </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5" component="p" gutterBottom className={classes.category}>  Lifestyle (34) </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5" component="p" gutterBottom className={classes.category}>  Technology (54) </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5" component="p" gutterBottom className={classes.category}>  Job Board (23) </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5" component="p" gutterBottom className={classes.category}>  Learning (43) </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5" component="p" className={classes.category}>  Application (21) </Typography>
                </ListItem>
            </List>
        </div>
    );
};

export default NewsCategories;