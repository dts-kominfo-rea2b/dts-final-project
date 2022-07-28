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

const getPokemon = async (pokemon) => {
  try {
    const response = await axios.get(`${url}pokemon/${pokemon}`);
    const pokemonData = response?.data;

    let genera = '';
    let habitat = '';
    let captureRate = '';
    let about = '';
    if (pokemonData) {
      const detail = await axios.get(pokemonData.species.url);

      about = detail.data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
      genera = detail.data.genera.find(g => g.language.name === 'en').genus;
      habitat = detail.data.habitat?.name ?? 'Unknown';
      captureRate = detail.data.capture_rate;
    }

    pokemonData.genera = genera;
    pokemonData.habitat = habitat;
    pokemonData.capture_rate = captureRate;
    pokemonData.about = about;
    return pokemonData;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

export { getPokemons, searchPokemons, getPokemon };