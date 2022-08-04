import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Home() {
  let navigate = useNavigate()

  const handleClickEasy = () => {
    navigate('/easy-recipes')
  }

  const handleClickHealthy = () => {
    navigate('/healthy-recipes')
  }

  return (
    <Box className="HomeContainer">
      <Typography
        className="HomeTitle"
        variant="h1"
        sx={{ fontFamily: "Pacifico, cursive", mb: "1em", mt: "0.25em" }}
      >
        Today's Menu
      </Typography>
      <Typography className="HomeDescription" variant="h4" sx={{ maxWidth: '40%' }}>
        {`
          What are you craving today?
          Some quick bites? Or something healthy?
          Don't worry, we got you covered!
          Find food recipes that suits your appetite here!
        `}
      </Typography>
      <Box>
        <button onClick={handleClickEasy} className='HomeButton'>Easy Foods</button>
        <button onClick={handleClickHealthy} className='HomeButton'>Healthy Foods</button>
      </Box>
    </Box>
  );
}

export default Home;