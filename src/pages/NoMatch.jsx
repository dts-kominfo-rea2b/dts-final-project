import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Card from '../components/CustomCard';

import zubat from '../assets/zubat.png';
import { Button, Grid } from '@mui/material';
import theme from '../assets/mui-theme';
import { Link } from 'react-router-dom';

const style = {
  maxWidth: '80px',
  display: 'block',
  marginTop: '-70px',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
}

export default function NoMatch() {
  return (
    <>
      <Card sx={{ padding: '0 4rem' }}>
        <Box my={4}>
          <img src={zubat} style={style} />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" gutterBottom>
                404
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2" gutterBottom>
                Page not found
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                The page you are looking for does not exist.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Go to Home
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};