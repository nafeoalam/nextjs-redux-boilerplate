import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import styles from "./Navbar.module.css";

const useStyle = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
        height: "94px"
    }
}))

const Navbar = () => {
    const classes = useStyle()
    const [allowed = { notLoaded: true }, setAllowed] = useState(true); //State Will change
    const router = useRouter()
    const currentURL = (router.pathname).toLowerCase();

    if (!currentURL.includes('/dashboard')) {
        return (
            <>
                <div className={classes.title}>
                    <MainNav />
                </div>
            </>
        );
    } else {
        if (allowed) {
            return <div className={classes.title}>
                <AuthNav customClass={styles} />
            </div>
        } else {
            return (
                <>
                    <div className={classes.title}>
                        <MainNav />
                    </div>
                </>
            );
        }

    }
}

export default Navbar;



