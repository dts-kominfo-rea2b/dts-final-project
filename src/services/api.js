import axios from 'axios'

const url = 'https://pokebot-be.herokuapp.com/api'

const storePokemon = async (data) => {
  try {
    const response = await axios.post(`${url}/store`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data;
  }
}

const getPokemons = async (email, offset = 0) => {
  try {

    const response = await axios.get(`${url}/get_all/${email}/30/${offset}`)

    return response.data
  } catch (err) {
    return err.response.data;
  }
}

const getPokemon = async (email, pokemon) => {
  try {
    const response = await axios.get(`${url}/get/${email}/${pokemon}`)
    return response.data
  } catch (err) {
    return err.response.data;
  }
}

const deletePokemon = async (id) => {
  try {
    const response = await axios.delete(`${url}/delete/${id}`)
    return response.data
  } catch (err) {
    return err.response.data;
  }
}

export {
  storePokemon,
  getPokemons,
  getPokemon,
  deletePokemon
}