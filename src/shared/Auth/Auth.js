import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CheckHelper from '../_Helper/check.helper';
import { useRouter } from 'next/router'
import { Box, CircularProgress } from '@material-ui/core'


const Auth = ({ children }) => {
    const [allowed = { notLoaded: true }, setAllowed] = useState(null);

    const router = useRouter()
    const currentURL = (router.pathname).toLowerCase();

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (CheckHelper.isRouteAvailable(window)) {
                if (currentURL.includes('/dashboard')) {
                    if (true) {
                        setAllowed(true)
                    } else {
                        return "Authentication Failed Page"
                    }
                } else {
                    setAllowed(true)
                }
            }
        }
    })
    if (allowed || !currentURL.includes('/dashboard')) {
        return (
            <>
                {children}
            </>
        );
    } else {
        return <Box
            width="100%"
            m={5}
            justifyContent="center" display="flex">
            <CircularProgress color='primary' size={150} />
        </Box>
    }

}

export default Auth;
