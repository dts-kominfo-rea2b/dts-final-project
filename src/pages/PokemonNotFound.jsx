import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '../components/CustomCard';

import snorlax from '../assets/snorlax.png';
import { Button, Grid } from '@mui/material';
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
      <Card sx={{ padding: '0.1rem 4rem' }}>
        <Box my={4}>
          <img src={snorlax} style={style} />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" gutterBottom>
                404
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2" gutterBottom>
                Pokemon not found
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                Pokemon does not exist, please find another pokemon.
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