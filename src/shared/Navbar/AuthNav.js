import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import footer_logo from 'public/assets/images/countries/flogo.png'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button, Container, Grid } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Image from 'next/image';
import styles from "./Navbar.module.css";
import Link from 'next/link';

import BrowseCourse from './BrowseCourses';
import UserProfileMenu from './UserProfileMenu';

const useStyles = makeStyles((theme) => ({
    sectionWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%"
    },

    tollbar: {
        display: "flex",
        justifyContent: "space-between"
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',

        },
    },

}));

const AuthNav = ({ customClass }) => {
    const classes = useStyles()





    const handleNavClick = (e) => {
        e.preventDefault()
        console.log('nav browser clicked')
    }

    return (
        <div className={classes.grow}>
            <AppBar className={styles.appBar} position="fixed">
                <Container>
                    <Toolbar className={classes.tollbar}>
                        <div className="logoWrapper">
                            <Link href="/" passHref>
                                <a className={styles.logoWrap}>


                                    <Image src={footer_logo} alt='' />
                                </a>
                            </Link>
                        </div>



                        <div className={classes.sectionWrap} >

                            <a style={{

                                // marginRight: '3rem',

                                color: "#21243D"
                            }}
                                href="#"
                                className="flexCenter" onClick={handleNavClick}>
                                <BrowseCourse />

                            </a>
                            <div className={classes.sectionDesktop}>
                                <Link href="/dashboard/workshops" passHref>
                                    <Typography style={{ color: "#000", cursor: "pointer" }} variant="h5">Workshop</Typography>
                                </Link>
                            </div>
                            <div className={classes.sectionDesktop}>
                                <Link href="/dashboard/courses" passHref>
                                    <Typography style={{ color: "#000", cursor: "pointer" }} variant="h5"> My Courses</Typography>

                                </Link>
                            </div>


                            <UserProfileMenu customClass={customClass} />


                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default AuthNav