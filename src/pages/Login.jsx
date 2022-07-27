import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import TextField from '../components/CustomTextField';
import Card from '../components/CustomCard';
import Loading from '../components/Loading';

import auth from '../libs/firebase';

import theme from '../assets/mui-theme';
import pikachu from '../assets/pikachu.png';

export default function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Login - Pokébot';
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
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
        <img src={pikachu} style={style} />
        <h1>Pokébot</h1>
        <Box component="form" onSubmit={onSubmit}>
          <Grid container spacing={2}>
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
              <Button type="submit" variant="contained" color="primary">Login</Button>
            </Grid>
            <Grid item xs={12}>
              {"Don't have an account?"} <Link to="/register">Register</Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}