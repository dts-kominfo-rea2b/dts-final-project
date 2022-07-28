import { LinearProgress, Grid, Typography, Box, Container } from "@mui/material";

function LinearProgressWithLabel(props) {
  return (
    <>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text">{props.label}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="primary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default function StatsPanel({ pokemonData }) {
  return (
    <Container>
      <Grid container spacing={1} sx={{ marginBottom: 3 }}>
        {pokemonData.stats.map((stat) => (
          <Grid item xs={12} key={stat.stat.name} textAlign="start">
            <LinearProgressWithLabel label={stat.stat.name.toUpperCase()} value={stat.base_stat / 180 * 100} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}