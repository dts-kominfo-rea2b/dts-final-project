import { useState } from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import Card from "../CustomCard";

import leave from "../../assets/leave.png";
import shadowBall from "../../assets/poke-shadow.png";
import theme from "../../assets/mui-theme";

import { deletePokemon } from "../../services/api";

export default function PokemonCard({ pokemon, setLoad }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleRelease = () => {
    deletePokemon(pokemon.id).then(() => {
      setOpen(false);
      setLoad(2);
    });
  }

  const imgStyle = {
    maxWidth: "150px",
    display: "block",
    marginBottom: "-40px",
    marginLeft: "-20px",
    marginRight: "auto",
    position: "relative",
  };

  const shadowStyle = {
    maxWidth: "100px",
    display: "block",
    marginTop: "0px",
    marginLeft: "-20px",
    marginRight: "auto",
    position: "absolute",
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

  const leaveStyle = {
    maxWidth: '120px',
    display: 'block',
    marginTop: '-100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  }

  const modal = (
    <>
      <img src={leave} alt="dot" style={leaveStyle} />
      <Typography variant="h5" sx={{ mt: 2 }}>
        Are you sure you want to release {pokemon.name}?
      </Typography>
      <Grid container sx={{ marginTop: 5 }} justifyContent="center">
        <Grid item xs={2}>
          <Button type="button" onClick={handleRelease} variant="contained" color="secondary">Yes</Button>
        </Grid>
        <Grid item xs={2}>
          <Button type="button" onClick={handleClose} variant="contained" color="primary">No</Button>
        </Grid>
      </Grid>
    </>
  )


  return (
    <Card>
      <Grid container alignItems='center' >
        <Grid item md={4}>
          <img src={shadowBall} style={shadowStyle} alt={pokemon.name} />
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon_id}.png`} height="150" style={imgStyle} alt={pokemon.name} />
        </Grid>
        <Grid item md={8} >
          <Typography variant="h5" component="h1" color="text" sx={{ fontWeight: 700 }} gutterBottom>
            {pokemon.name.toUpperCase()}
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            <Typography variant="subtitle2">
              Release
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} textAlign="center">
          {modal}
        </Box>
      </Modal>
    </Card>
  )
};