import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import theme from '../assets/mui-theme';
import { Typography } from '@mui/material';

const style = {
  backgroundColor: theme.palette.secondary.main,
  width: '100%',
  position: 'fixed',
  bottom: 0,
  padding: '10px 0',
  marginTop: 5
}

export default function FixedBottomNavigation() {

  return (
    <Box sx={style} xs={{ width: 1 }} >
      <Typography>Firdaus Nanda Pradanggapasti ● <a href="https://github.com/dws16">dws16</a></Typography>
    </Box>
  );
}
