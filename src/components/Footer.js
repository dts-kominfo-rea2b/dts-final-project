import * as React from 'react';
import {ThemeProvider, AppBar, Box, Toolbar, Typography} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import theme from '../themes/theme';

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 , marginTop:"10"}}>
      <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <AssignmentIndIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography variant="caption" display="block" gutterBottom>
            Ariansyah Nurhadi - REA2B
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}