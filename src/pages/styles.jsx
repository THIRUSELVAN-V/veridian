import { Box, styled } from "@mui/material";

export const Main = styled(Box)(() => ({
  padding: "67px",
}));

export const Base = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  overflowY: "scroll",
  scrollbarWidth: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const First = styled(Box)(() => ({
  height: "540px",
  width: "1308px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#009065",
}));

export const Inside = styled(Box)(() => ({
  height: "250px",
  width: "976px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#F5F7FA",
}));

export const stylesnew = {
  img1: {
    left: "0",
    position: "absolute",
  },
  img2: {
    right: "0",
    position: "absolute",
  },

  Investment: {
    backgroundColor: "#F9C300",
    padding: "5px 10px",
    fontSize: "14px",
    letterSpacing: "2px",
  },

  Empowering: {
    fontSize: "48px",
    textAlign: "center",
  },

  Knowmore: {
    backgroundColor: "#0000004D",
    height: "52px",
    width: "189px",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    justifyContent: "center",
  },
};
