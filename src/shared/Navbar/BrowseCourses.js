import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MegaMenu from './MegaMenu'
import { Typography } from '@material-ui/core'
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        borderRadius: '2rem',
        marginTop: '17px'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        MenuListProps={{ disablePadding: true }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

const BrowseCourse = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                // variant="contained"
                // color="secondary"
                style={{
                    color: "#21243D"
                }}
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon fontSize="large" />}
            >
                <Typography variant="h5">Browse Courses</Typography>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div>
                    <MegaMenu handleClose={handleClose} />
                </div>
            </StyledMenu>
        </div>
    )
}
export default BrowseCourse