import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Grid } from '@material-ui/core'
import styles from './Navbar.module.css'
import Image from 'next/image'

const CategoryMenuItem = ({ children, name, title, onMenuItemClick,featured_image, active = true }) => {

    return (
        <Grid onClick={() => onMenuItemClick(name)} container alignItems='center' justifyContent='space-between' style={{ padding: '1.3rem 2.4rem', cursor: 'pointer' }}>
            <Grid item>
                <Grid container alignItems='center' >
                    <Grid item style={{ width: '35px' }}>
                        <Grid container alignItems='center' justifyContent='center'>
                            {children}
                        </Grid>
                    </Grid>
                    <span className={active ? styles.menuNameActive : styles.menuName}>{title}</span>
                </Grid>
            </Grid>
            <ArrowForwardIosIcon className={active ? styles.menuIconActive : styles.menuIcon} />

        </Grid>
    )
}

export default CategoryMenuItem