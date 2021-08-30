import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },

}));

const UserProfileMenu = ({ customClass }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Avatar alt="Zubair Hasan" src="/static/images/avatar/1.jpg" onClick={handleClick} className={classes.small} />

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className={customClass.userProfile}>
                    <div className={customClass.userInfo}>
                        <Avatar alt="Zubair Hasan" src="/static/images/avatar/1.jpg" className={[classes.large, " mt-1", " mb-1"].join(" ")} />
                        <Typography variant="h5" style={{ marginBottom: "1rem" }}>
                            Zubair Hasan
                        </Typography>
                        <Typography onClick={handleClose} variant="subtitle1" style={{ marginBottom: "1rem" }}>
                            Add a bio
                        </Typography>
                        <Button variant="contained" onClick={handleClose} color="primary">View Profile</Button>
                    </div>
                    <div className={customClass.listUserMenu}>

                        <Typography component="ul">
                            <Typography component="li" style={{ fontFamily: "Poppins-Medium" }}>My Courses</Typography>



                            <Typography style={{
                                fontFamily: "Poppins-Medium", cursor: "pointer"
                            }} component="li"
                                onClick={handleClose}
                            >Account Setting</Typography>

                            <Typography
                                onClick={handleClose}
                                component="li" style={{ fontFamily: "Poppins-Medium", cursor: "pointer" }}>Help</Typography>
                            <Typography
                                onClick={handleClose}
                                component="li" style={{ fontFamily: "Poppins-Medium", cursor: "pointer" }}>Sign Out</Typography>


                        </Typography>
                    </div>
                </div>

            </Menu>
        </div>
    );
}

export default UserProfileMenu