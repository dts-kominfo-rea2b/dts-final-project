import { Chip, Container, Grid, Typography } from "@mui/material";

export default function AboutPanel({ pokemonData }) {
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={12}>
          {pokemonData.types.map(type => (
            <Typography key={type.type.name} component="span" variant="subtitle" className={`type-${type.type.name}`} sx={{ fontWeight: 700, padding: 1, borderRadius: 1, margin: "0 5px" }}>{type.type.name[0].toUpperCase() + type.type.name.substring(1)}</Typography>
          ))}
        </Grid>
        <Grid item xs={12} textAlign="start">
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 500 }}>{pokemonData.about}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginBottom: 1 }} textAlign="start">
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>Species</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>{pokemonData.genera}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginBottom: 1 }} textAlign="start">
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>Height</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>{`${pokemonData.height / 10} m`}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginBottom: 1 }} textAlign="start">
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>Weight</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>{`${pokemonData.weight / 10} kg`}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginBottom: 1 }} textAlign="start">
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>Habitat</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>{pokemonData.habitat[0].toUpperCase() + pokemonData.habitat.substring(1)}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginBottom: 1 }} textAlign="start">
        <Grid item md={6}>
          <Typography component="span" variant="subtitle" sx={{ fontWeight: 700 }}>Catch Rate</Typography>
        </Grid>
        <Grid item md={6}>
          <Chip label={`${(pokemonData.capture_rate / 255 * 100).toFixed(2)}%`} size="small" color="primary" />
        </Grid>
      </Grid>
    </Container>
  )
}