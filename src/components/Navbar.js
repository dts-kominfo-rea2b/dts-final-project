import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import MenuLogout from './MenuLogout';

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'Popular', link: '/popular' },
  { text: 'Best Seller', link: '/bestseller' },
  { text: 'About', link: '/about' }
];

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
          <AutoStoriesSharpIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
              AYU BOOKS
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
            <MenuLogout />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;