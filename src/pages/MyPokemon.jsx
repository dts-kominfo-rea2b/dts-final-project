import { useEffect, useState } from 'react';

import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAuthState } from 'react-firebase-hooks/auth';

import Card from '../components/CustomCard';
import PokemonCard from '../components/MyPokemon/PokemonCard';
import Loading from '../components/Loading';
import NotFound from '../components/MyPokemon/NotFound';

import pokeballs from '../assets/pokeballs.png';
import auth from '../libs/firebase';
import { getPokemons } from '../services/api';

const style = {
  maxWidth: '80px',
  display: 'block',
  marginBottom: '-40px',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
}

export default function MyPokemon() {

  const [pokemons, setPokemons] = useState(new Set());
  const [offset, setOffset] = useState(0);
  const [load, setLoad] = useState(true);

  const [user, loading] = useAuthState(auth);

  const handleScroll = () => {
    const now = window.innerHeight + document.documentElement.scrollTop + 30;
    const bottom = document.scrollingElement.scrollHeight;
    if (now > bottom) {
      setOffset(offset + 60);
    }
  }

  useEffect(() => {
    document.title = 'Home - Pokébot';
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (!loading && load) {
      console.log('masuk');
      getPokemons(user?.email, offset).then(data => {
        const newPokemon = new Set([...pokemons, ...data.pokemons]);
        if (load === 2) {
          setPokemons(new Set(data.pokemons));
        } else {
          setPokemons(newPokemon);
        }
        setLoad(false);
      })
    }
  }, [offset, load]);

  if (load) {
    return <Loading />;
  }

  if (pokemons.size < 1) {
    return <NotFound />;
  }

  return (
    <Container>
      <Grid container spacing={1} justifyContent="flex-start" alignItems="flex-start" sx={{ marginBottom: 5 }}>
        <Grid item md={12}>
          <img src={pokeballs} style={style} alt={'pokeballs'} />
          <Card>
            <Box my={2} px={5}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={12} textAlign="start">
                  <Typography variant="h5" component="h1" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                    My Pokémon
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {pokemons && Array.from(pokemons).map(pokemon => (
          <Grid item md={4} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} setLoad={setLoad} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}