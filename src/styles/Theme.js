import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", 
    primary: {
      main: "#009065",
      Dark:"#006547",
      Lite:"#D9EFE9",
      mail: "#0000004D", 
    },
    secondary: {
      main: "#DFD328",
      Dark:"#666114",
      Lite:"#EFE992",
      yell: "#F9C300", 
    },
    background:{
        bg1:"#EDEFF2",
        bg2:"#F2F4F7",
        bg3:"#F5F7FA",
        white:"#FFFFFF"
    },
    text:{
        primary:"#091B29",
        secondary:"#51585E",
        tertiary:"#717B85"
    },
    line:{
        pri:"#A9AFBC",
        sec:"#CACFDB",
    },
    
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: {
        extraLarge: "24px",
        large: "20px",
        extraMedium: "18px",
        medium: "16px",
        small: "14px",
        verySmall: "12px",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
  },
});

export default theme;
