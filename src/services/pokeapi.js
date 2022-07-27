import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/';

const getPokemons = async (offset = 0) => {
  const response = await axios.get(`${url}pokemon`, {
    params: {
      limit: 60,
      offset: offset,
    },
  });
  const pokemons = response.data.results;
  return pokemons.map(pokemon => ({
    name: pokemon.name,
    url: pokemon.url,
    id: pokemon.url.split('/').slice(-2)[0],
  }));
}

const searchPokemons = async (name) => {
  const response = await axios.get(`${url}pokemon/`, {
    params: {
      limit: 5000,
    },
  });

  const pokemons = response.data.results;
  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(name));
  console.log(filteredPokemons);
  return filteredPokemons.map(pokemon => ({
    name: pokemon.name,
    url: pokemon.url,
    id: pokemon.url.split('/').slice(-2)[0],
  }));
}

export { getPokemons, searchPokemons };