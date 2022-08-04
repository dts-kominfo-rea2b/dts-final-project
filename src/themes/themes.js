import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#f9c210',
          dark: '#ffc300',
          light: '#ffd60a',
        },
        secondary: {
          main: '#003566',
          light: '#445073',
          dark: '#00305d',
        },
      },
    }
);

export default theme;
