import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import TextField from '../components/CustomTextField';
import Card from '../components/CustomCard';

import auth from '../libs/firebase';
import theme from '../assets/mui-theme';

import psyduck from '../assets/psyduck.png';

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  const style = {
    maxWidth: '80px',
    display: 'block',
    marginTop: '-70px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  }

  return (
    <Box>
      <Card>
        <img src={psyduck} style={style} />
        <h1>Create an account</h1>
        <Grid container spacing={1} component="form" onSubmit={onSubmit}>
          <Grid item xs={12}>
            <TextField sx={{ width: '50%' }} label="Email" name="email" color="primary" variant="outlined" autoComplete="username" required />
          </Grid>
          <Grid item xs={12}>
            <TextField sx={{ width: '50%' }} label="Password" name="password" type="password" color="primary" variant="outlined" autoComplete="current-password" required />
          </Grid>
          <Grid item xs={12}>
            {error && <Typography sx={{ color: theme.palette.danger.main }} variant="subtitle2">{error}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Register</Button>
          </Grid>
          <Grid item xs={12}>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}