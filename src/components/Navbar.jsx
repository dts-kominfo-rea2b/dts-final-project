import * as React from 'react';
import { signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import auth from '../libs/firebase';
import star from '../assets/star.png';

const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return null;
  }

  const onLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      console.log(error);
    });
  }

  const style = {
    maxWidth: '40px',
  }

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { md: 'flex', xs: 'none' }, mr: 1 }}>
            <img src={star} style={style} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pokébot
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
            </Link>
            {user && (
              <Link to="/my-pokemon">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  My Pokemon
                </Button>
              </Link>
            )}

            {!user && (
              <>
                <Link to="/login">
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    Register
                  </Button>
                </Link>
              </>
            )}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/register">
                <Button onClick={onLogout} sx={{ my: 2, color: 'white', display: 'block' }}>
                  Logout
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
