import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import CheckHelper from '../_Helper/check.helper'

const defaultContents = [
    {
        id: 1,
        title: 'Accounting',
        slug: 'accounting',
    },
    {
        id: 2,
        title: 'Finance',
        slug: 'finance',
    },
    {
        id: 3,
        title: 'Business',
        slug: 'business',
    },
    {
        id: 4,
        title: 'Personal Development',
        slug: 'personal-development',
    },
    {
        id: 5,
        title: 'Quality Licence Scheme Endorsed',
        slug: 'quality-licence-scheme-endorsed',
    },
    {
        id: 6,
        title: 'Development',
        slug: 'development',
    },
]

const useStyles = makeStyles({
    toggleButtonGroup: {
        display: 'block !important'
    },
    toggleBtn: {
        marginRight: '1.6rem',
        borderTopRightRadius: '.5rem !important',
        borderBottomRightRadius: '.5rem !important',
        borderTopLeftRadius: '.5rem !important',
        borderBottomLeftRadius: '.5rem !important',
        border: '1px solid rgba(0, 0, 0, 0.12) !important',
        marginBottom: '1rem',
        // marginTop:'1rem'
    },
    relatedSkills: {
        display: 'inline-block',
        fontWeight: '500',
        fontSize: '1.7rem',
        color: '#5A5755', //#5A5755
        padding: '1.6rem',
        marginTop: '1rem !important',
        marginRight: '1.2rem',
        marginBottom: '1rem',
    }
})

const CustomSelectButtonGroup = ({ value, contents = defaultContents, onChange, title = 'Top Categories' }) => {
    const classes = useStyles()
    return (
        <ToggleButtonGroup className={classes.toggleButtonGroup} value={value} onChange={onChange} aria-label="text formatting">
            <p className={classes.relatedSkills}>{title}</p>
            {CheckHelper.hasArrayItem(contents) && contents.map(item => {
                return (
                    <ToggleButton key={item.slug} className={classes.toggleBtn} value={item.slug} aria-label={item.name}>
                        {item.name}
                    </ToggleButton>
                )
            })}

        </ToggleButtonGroup>
    )
}

export default CustomSelectButtonGroup