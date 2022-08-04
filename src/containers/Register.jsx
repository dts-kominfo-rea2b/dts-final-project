import React, { useState } from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Box, Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate('/');
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlined></LockOutlined></Avatar>
                <Typography component='h1' variant='h5'>Sign Up</Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}><TextField required fullWidth id='email' label='email address' name='email' autoComplete='email' autoFocus></TextField></Grid>
                        <Grid item xs={12}><TextField required fullWidth name='password' label='password' type='password' id='password' autoComplete='new-password'></TextField></Grid>
                    </Grid>
                    <Typography color='red'>{errorMessage}</Typography>
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>SIGN UP</Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Link to='/login'>Already have an account? Sign in</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Register;