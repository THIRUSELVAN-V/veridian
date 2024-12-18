import { Box, styled } from "@mui/material";
export const style = (theme)=>({
  Main:{
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Head:{
    height: "120px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "2px solid #CACFDB",
  },
  Body:{
    height: "85%",
    width: "100vw",
    overflowY: "scroll",
    scrollbarWidth: "none",
  }
})