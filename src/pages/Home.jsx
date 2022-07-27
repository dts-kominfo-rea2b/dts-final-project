import { useEffect, useState } from 'react';

import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '../components/CustomCard';
import Search from '../components/Search';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';

import pokeball from '../assets/pokeball.png';
import { getPokemons, searchPokemons } from '../services/pokeapi';
import { isEmpty } from '@firebase/util';

const style = {
  maxWidth: '80px',
  display: 'block',
  marginBottom: '-40px',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
}

export default function Home() {

  const [pokemons, setPokemons] = useState(new Set());
  const [offset, setOffset] = useState(0);
  const [load, setLoad] = useState(true);
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [search, setSearch] = useState('');

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
    if (!isEmpty(search)) {
      setLoad(true);
      searchPokemons(search)
        .then(data => {
          setLoad(false);
          setPokemons(data);
        })
    }
  }, [search]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (offset < 845) {
      getPokemons(offset).then(data => {
        const newPokemon = new Set([...pokemons, ...data]);
        setPokemons(newPokemon);
        setLoad(false);
      })
    }
  }, [offset]);

  if (load) {
    return <Loading />;
  }

  return (
    <Container>
      <Grid container spacing={1} justifyContent="flex-start" alignItems="flex-start" sx={{ marginBottom: 5 }}>
        <Grid item md={12}>
          <img src={pokeball} style={style} alt={'pokeball'} />
          <Card>
            <Box my={2} px={5}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item md={4} textAlign="start">
                  <Typography variant="h5" component="h1" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                    Pokédex
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Search search={search} setSearch={setSearch} />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {pokemons && Array.from(pokemons).map(pokemon => (
          <Grid item md={4} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}