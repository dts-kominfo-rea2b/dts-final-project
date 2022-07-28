import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Box, Button, Grid, Typography, Modal, } from "@mui/material";

import TextField from "../CustomTextFieldDark";

import pokeball from "../../assets/pokeball2.png";
import dot from "../../assets/dot.svg";
import plus from "../../assets/plus.svg";
import theme from "../../assets/mui-theme";
import gotcha from "../../assets/gotcha.png";
import pawprints from "../../assets/pawprints.png";

import auth from "../../libs/firebase";

import { storePokemon } from "../../services/api"

const imgStyle = {
  maxWidth: "350px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  zIndex: "2",
};

const dotStyle = {
  position: "absolute",
  marginTop: "30px",
  marginLeft: "-30px",
  width: "200px",
  opacity: "0.8",
  zIndex: "1",
};

const plusStyle = {
  position: "absolute",
  marginTop: "240px",
  marginLeft: "-240px",
  height: "100px",
  opacity: "0.8",
  zIndex: "1",
};

const gotchaStyle = {
  maxWidth: '160px',
  display: 'block',
  marginTop: '-100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: theme.palette.background.main,
  color: theme.palette.background.contrastText,
  borderRadius: '50px',
  boxShadow: 24,
  p: 4,
};

export default function PokemonCatch({ pokemonData }) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return null;
  }

  const catchRate = pokemonData.capture_rate / 255 * 100;

  const handleClose = () => setOpen(false);

  const modalLoading = () => (
    <>
      <img src={pokeball} alt="pokeball" className="pokeball-shake" style={{ width: 100, height: 100, marginTop: '-100px' }} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Catching {pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1)}
      </Typography>
    </>
  )

  const modalFailed = () => (
    <>
      <img src={pawprints} alt="dot" style={gotchaStyle} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Wild {pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1)} fled!
      </Typography>
    </>
  )

  const modalSuccess = () => (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1)} has been stored in your Bag!
      </Typography>
    </>
  )

  const modalError = (error) => (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {error}
      </Typography>
    </>
  )

  const handleStore = () => {
    const nickname = document.getElementById("nickname").value;

    const pokemon = {
      name: nickname,
      pokemon_id: pokemonData.id,
      pokemon_name: pokemonData.name,
      email: user.email,
    }

    storePokemon(pokemon).then((response) => {
      if (response.success === true) {
        setModal(modalSuccess);
        setTimeout(() => {
          setOpen(false);
          setModal(false);
        }, 3000);
      } else {
        setModal(modalError(response.message));
        setTimeout(() => {
          setModal(modalCatched);
        }, 2000);
      }
    })
  }

  const modalCatched = () => (
    <>
      <img src={gotcha} alt="dot" style={gotchaStyle} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        {pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1)} was caught!
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Give it a nickname and it will be stored in your Bag.
      </Typography>
      <Box>
        <TextField sx={{ width: '50%', marginTop: 4 }} label="Nickname" id="nickname" name="nickname" color="background" variant="outlined" autoComplete="nickname" required />
        <Grid container sx={{ marginTop: 5 }}>
          <Grid item xs={6}>
            <Button type="button" onClick={handleClose} variant="contained" color="secondary">Release</Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="button" onClick={handleStore} variant="contained" color="primary">Catch</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )

  const handleOpen = () => {
    setOpen(true);
    setModal(modalLoading);
    setTimeout(() => {
      const rand = Math.random() * 100;
      if (rand < catchRate) {
        setModal(modalCatched);
      } else {
        setModal(modalFailed);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      }
    }, 3000);

  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography sx={{ fontWeight: 700 }} variant="h6" component="h1">
            {pokemonData.name.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 700 }} variant="h6" component="h1" >
            #{('00' + pokemonData.id).slice(-3)}
          </Typography>
        </Grid>
      </Grid>
      <img src={dot} alt="dot" style={dotStyle} />
      <img src={plus} alt="plus" style={plusStyle} />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} style={imgStyle} alt={pokemonData.name} loading="lazy" />
      <Button variant="contained" color="primary" onClick={handleOpen}><img src={pokeball} style={{ marginLeft: '-35px' }} alt="pokeball" className="pokeball-shake" /> &nbsp;&nbsp;Catch</Button>

      <Modal open={open}>
        <Box sx={style} textAlign="center">
          {modal}
        </Box>
      </Modal>
    </>
  )
}