import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import footer_logo from 'public/assets/images/countries/flogo.png'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import MoreIcon from '@material-ui/icons/MoreVert'
import { Button, Container, Grid } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Image from 'next/image'
import styles from "./Navbar.module.css"
import Link from 'next/link'

import BrowseCourse from './BrowseCourses'

const useStyles = makeStyles((theme) => ({
    sectionWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "55%"
    },
    // grow: {
    //     flexGrow: 1,

    // },
    tollbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    // link: {
    //     textDecoration: 'underline'
    // },

    // title: {
    //     display: 'none',
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'block',
    //     },
    // },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',

        },
    },
    // sectionMobile: {
    //     display: 'flex',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //     },
    // }
}))

export default function MainNav() {
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


                            <div className={classes.sectionDesktop}>
                                <a style={{

                                    // marginRight: '3rem',

                                    color: "#21243D"
                                }}
                                    href="#"
                                    className="flexCenter" onClick={(e) => handleNavClick(e)}>
                                    <BrowseCourse />

                                </a>
                                <Button variant="contained" style={{
                                    padding: "1.5rem 3rem",
                                    borderRadius: "30px"
                                }} color="primary">
                                    <Link href="/auth/signup"><a>Start Your Free 4 Weeks</a></Link>
                                </Button>
                                <Button variant="contained" style={{
                                    margin: '0 3rem',
                                    padding: "1.5rem 3.5rem",
                                    borderRadius: "30px",
                                    color: "#fff",
                                    backgroundColor: "#000"

                                }}>
                                    <Link href="/auth/signin">Login</Link>
                                </Button>
                            </div>


                            {/* <IconButton aria-label="show 17 new notifications" color="primary">
                                <Badge badgeContent={17} color="secondary">
                                    <AddShoppingCartIcon fontSize="large" />
                                </Badge>
                            </IconButton> */}


                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
