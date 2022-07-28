import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F7BA15",
      contrastText: "#2C3152",
    },
    secondary: {
      main: "#2C3152",
      contrastText: "#F0F3F5"
    },
    background: {
      main: "#BDC0DB",
      contrastText: "#2C3152"
    },
    danger: {
      main: "#DB3A34",
      contrastText: "#F0F3F5"
    },
    text: {
      primary: "#F0F3F5",
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  }
});

export default theme;