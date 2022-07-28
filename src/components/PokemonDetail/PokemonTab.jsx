import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import AboutPanel from './AboutPanel';
import StatsPanel from './StatsPanel';

import plus from "../../assets/plus.svg";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const plusStyle = {
  position: "absolute",
  marginTop: "50px",
  marginLeft: "220px",
  height: "100px",
  opacity: "0.8",
  zIndex: "1",
};

export default function ColorTabs({ pokemonData }) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <img src={plus} alt="plus" style={plusStyle} />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label="About" />
        <Tab value="two" label="Stats" />
      </Tabs>
      <TabPanel value={value} index="one">
        <AboutPanel pokemonData={pokemonData} />
      </TabPanel>
      <TabPanel value={value} index="two">
        <StatsPanel pokemonData={pokemonData} />
      </TabPanel>
    </Box >
  );
}
