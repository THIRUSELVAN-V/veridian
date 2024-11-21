import { Box, styled } from "@mui/material";

export const Main = styled(Box)(() => ({
  padding: "67px",
  width: "1306px",
  margin: "0 auto",
}));

export const Base = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  overflow: "scroll",
  scrollbarWidth: "none",
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
  marginBottom: "65px",
}));

export const Last = styled(Box)(() => ({
  height: "285px",
  width: "1308px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#009065",
}));

export const Copyright = styled(Box)(() => ({
  backgroundColor: "red",
  height: "66px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  color: "#717B85",
  backgroundColor: "#F5F7FA",
  justifyContent: "center",
  borderTop: "2px solid #CACFDB",
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

export const Lanka = styled(Box)(() => ({
  height: "200px",
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

  arrow: {
    marginTop: "8px",
    marginLeft: "7px",
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
    fontWeight: "700",
  },

  Knowmore: {
    backgroundColor: "#0000004D",
    height: "52px",
    width: "189px",
    display: "flex",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
  },

  Copyright: {
    width: "1308px",
    display: "flex",
    justifyContent: "space-between",
  },

  email: {
    height: "52px",
    width: "342px",
    backgroundColor:'#0000004D',
    display:'flex',
    alignItems:'center'
  },

  contact: {
    fontSize: "32px",
    fontWeight: "bold",
  },
};
