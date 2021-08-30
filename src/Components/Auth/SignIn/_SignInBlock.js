import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';

import { login } from "src/redux/actions/authActions";
import Input from './Input';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        paddingTop: '16px', paddingBottom: '16px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '100px', background: ' #ED4266', color: '#fff'
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
    errorMessage: {
        color: 'red',
        fontSize: 'small',
        marginLeft: '10px'
    }
}))

const initialState = { email: '', password: '', confirmPassword: '' };

export const SignInBlock = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const [errorMessage, setErrorMessage] = useState('');
    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form, history));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>

                <Typography component="h1" variant="h5">{'Log In to your Account'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Input name="email" label="Email Address" handleChange={handleChange} />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        <span className={classes.errorMessage}>{errorMessage}</span>

                    </Grid>
                    <Button type="submit" fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        {'Login'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}
