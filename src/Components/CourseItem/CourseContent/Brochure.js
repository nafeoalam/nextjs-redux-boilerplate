
import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
const Brochure = ({ customClass }) => {
    return (
        <div className={customClass.mainBrochure}>
            <div className={customClass.brochureWrap}>
                <div className="headerB">
                    <Typography style={{
                        color: '#7971EA',
                        marginBottom: 0
                    }} variant="h4">
                        What&apos;s Included
                    </Typography>
                    <Typography variant="h5" paragraph style={{
                        fontFamily: "Poppins-Medium,"
                    }}>
                        Features / Benefits
                    </Typography>

                </div>

                <List>
                    <ListItem  >
                        <ListItemIcon style={{ minWidth: 20 }}>
                            <CheckIcon color="primary" />
                        </ListItemIcon>
                        <Typography variant="h5">
                            70+ hours of Live Learning
                        </Typography>

                    </ListItem>
                    <ListItem  >
                        <ListItemIcon style={{ minWidth: 20 }}>
                            <CheckIcon color="primary" />
                        </ListItemIcon>
                        <Typography variant="h5">
                            70+ hours of Live Learning
                        </Typography>

                    </ListItem>
                    <ListItem  >
                        <ListItemIcon style={{ minWidth: 20 }}>
                            <CheckIcon color="primary" />
                        </ListItemIcon>
                        <Typography variant="h5">
                            70+ hours of Live Learning
                        </Typography>

                    </ListItem>
                    <ListItem >
                        <ListItemIcon style={{ minWidth: 20 }}>
                            <CheckIcon color="primary" />
                        </ListItemIcon>
                        <Typography variant="h5">
                            70+ hours of Live Learning
                        </Typography>
                    </ListItem>
                </List>
            </div>
            <div className={customClass.buttonWrap}>
                <div className={customClass.customButton}>

                    <Button variant="contained" startIcon={<GetAppIcon />} color="primary">Download Brochure</Button>

                </div>
            </div>


        </div>
    )
}

export default Brochure
