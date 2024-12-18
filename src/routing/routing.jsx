import React from "react";
import Header from "../components/Header/header";
import Home from "../pages/home";
import { style} from "../styles/layout";
import { Box,useTheme} from "@mui/material";

function routing() {
  const theme = useTheme();
  const styles = style(theme);
  return (
    <Box sx={styles.Main}>
      <Box sx={styles.Head}>
        <Header />
      </Box>
      <Box sx={styles.Body}>
        <Home />
      </Box>
    </Box>
  );
}

export default routing;
