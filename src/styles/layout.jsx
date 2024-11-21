import { Box, styled } from "@mui/material";

export const Main = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Head = styled(Box)(() => ({
  height: "120px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderBottom: "2px solid #CACFDB",
}));

export const Body = styled(Box)(() => ({
  height: "85%",
  width: "100vw",
  overflowY: "scroll",
  scrollbarWidth: "none",
}));
