import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import Navbar from "./components/Navbar";
import GameLists from "./containers/GameLists";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <GameLists></GameLists>        
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
