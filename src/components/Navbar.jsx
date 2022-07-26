import * as React from 'react';
import { signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import auth from '../libs/firebase';
import star from '../assets/star.png';
import { Button } from '@mui/material';
import theme from '../assets/mui-theme';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


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
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
            </Link>
            {user && (
              <Link to="/">
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  My Pokemon
                </Button>
              </Link>
            )}

            {!user && (
              <>
                <Link to="/login">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Register
                  </Button>
                </Link>
              </>
            )}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={onLogout}>
                  <Typography textAlign="center" color="secondary">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
