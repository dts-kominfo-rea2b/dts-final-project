import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Grid } from "@mui/material";

import Loading from "../components/Loading";
import Card from "../components/CustomCard";
import PokemonTab from "../components/PokemonDetail/PokemonTab";
import Divider from '../components/CustomDivider';
import PokemonCatch from "../components/PokemonDetail/PokemonCatch";

import PokemonNotFound from "./PokemonNotFound";

import { getPokemon } from "../services/pokeapi";

export default function PokemonDetail() {
  const { pokemon } = useParams();

  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${pokemon[0].toUpperCase() + pokemon.substring(1)} - Pokébot`;
    setLoading(true);
    getPokemon(pokemon).then(data => {
      setPokemonData(data);
      setLoading(false);
    });
  }, [pokemon]);

  if (loading) {
    return <Loading />;
  }

  if (!loading && !pokemonData) {
    return <PokemonNotFound />;
  }

  return (
    <Container>
      <Card>
        <Grid container justifyContent="space-around">
          <Grid item md={5}>
            <PokemonCatch pokemonData={pokemonData} />
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'primary' }} />
          <Grid item md={5}>
            <PokemonTab pokemonData={pokemonData} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}