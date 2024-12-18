import React from "react";
import Routing from "./routing/routing";
import "./styles/app.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;
