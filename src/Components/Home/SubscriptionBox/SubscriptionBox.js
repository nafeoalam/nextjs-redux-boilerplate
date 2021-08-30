import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import React from 'react'
import styles from './SubscriptionBox.module.css'
import clsx from 'clsx';
import CustomButton from 'src/shared/CustomButton/CustomButton';
const SubscriptionBox = () => {
    return (
        <Container style={{ marginBottom: 45, marginTop: 45 }}>
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <Grid container justifyContent="center" spacing={4} alignItems="center">
                        <Grid item md={7}>
                            <Typography variant="h4" paragraph className="sectionTitle">
                                Start exploring today
                            </Typography>

                            <List component="ul" className={styles.list} aria-label="main mailbox folders">
                                <ListItem >
                                    <ListItemIcon style={{ minWidth: 30 }}>
                                        <CheckIcon fontSize="large" color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Support for learners from their certificate courses to diploma studies" />
                                </ListItem>
                                <ListItem  >
                                    <ListItemIcon style={{ minWidth: 30 }}>
                                        <CheckIcon fontSize="large" color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon style={{ minWidth: 30 }}>
                                        <CheckIcon fontSize="large" color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Support for learners from their certificate courses to diploma studies" />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon style={{ minWidth: 30 }}>
                                        <CheckIcon fontSize="large" color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Support for learners from their certificate courses to diploma studies" />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon style={{ minWidth: 30 }}>
                                        <CheckIcon fontSize="large" color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Support for learners from their certificate courses to diploma studies" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={5}>
                            <Typography variant="h4" >
                                £58/ month
                            </Typography>
                            <Typography component="p" style={{ marginTop: 10, marginBottom: 10 }}>FREE for 4 weeks</Typography>
                            <CustomButton variant="contained" color="primary" className="customButton" >Start Your Free 4 Weeks</CustomButton>
                            <div className={styles.dFlex}>
                                <ListItem >
                                    <ListItemIcon style={{ minWidth: 20 }}>
                                        <CheckIcon fontSize="large" style={{ color: "#B4E6A1" }} color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="verifiable certificates" />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon style={{ minWidth: 20 }}>
                                        <CheckIcon fontSize="large" style={{ color: "#B4E6A1" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="No commitment required" />
                                </ListItem>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default SubscriptionBox
