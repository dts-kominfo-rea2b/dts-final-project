import React, { useState } from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Box, Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setErrorMessage(error.message);
        }

    }

    return (
        <Container component='main' maxWidth='xs'>
            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlined></LockOutlined></Avatar>
                <Typography component='h1' variant='h5'>Sign in</Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin='normal' required fullWidth id='email' label='email address' name='email' autoComplete='email' autoFocus></TextField>
                    <TextField margin='normal' required fullWidth name='password' label='password' type='password' id='password' autoComplete='current-password'></TextField>
                    <Typography color='red'>{errorMessage}</Typography>
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>SIGN IN</Button>
                    <Grid container>
                        <Grid item>
                            <Link to='/register'>{'dont have account? Sign up'}</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;