import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import CustomCard from "./CustomCard";
import pokeball from "../assets/pokeball.png";

export default function Loading() {
  return (
    <Container>
      <Box my={4} px={5}>
        <img src={pokeball} className="pokeball-rotate" />
        <CustomCard sx={{ padding: 10 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Loading...
          </Typography>
        </CustomCard>
      </Box>
    </Container>
  )
}