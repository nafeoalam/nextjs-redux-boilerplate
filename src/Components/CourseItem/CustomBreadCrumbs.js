import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs({ title }) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            <Link color="inherit" href="/courses" onClick={handleClick}>
                Courses
            </Link>
            <Typography color="textPrimary">{title}</Typography>
        </Breadcrumbs>
    );
}
