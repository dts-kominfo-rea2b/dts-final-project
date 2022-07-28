import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '../../components/CustomCard';

import eevee from '../../assets/eevee.png';
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
  maxWidth: '80px',
  display: 'block',
  marginTop: '-70px',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
}

export default function NotFound() {
  return (
    <Container>
      <Card sx={{ padding: '0.1rem 4rem' }}>
        <Box my={4}>
          <img src={eevee} style={style} />
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Typography variant="h3" component="p">
                You don't have any Pokémon yet.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Find your first Pokémon
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};