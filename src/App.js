import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
// import Movies from './containers/Movies';
import theme from './themes/theme';
import { Outlet } from 'react-router-dom';
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Container>
          <Grid container spacing={5}>
            <Navbar />
            <Outlet />
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
