import React from 'react';
import { 
  Box, 
  Typography,
  Container,  
  Link,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Today's Menu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight:'auto'
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          backgroundColor: '#f9c210'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Find recipe that suits your appetite here at Today's Menu
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default Footer