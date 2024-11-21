import { Box, styled } from "@mui/material";

export const Mainhead = styled(Box)(() => ({
    height: "100%",
    width: "1440px",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position: "relative",
  }));

export const stylesnew = {
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#009065",
      height: "3px",
    },
    minHeight: "0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  tab: {
    color: "#51585E",
    "&.Mui-selected": { color: "#009065" },
    textTransform: "none",
    alignItems: "start",
    justifyContent: "start",
    marginRight: "32px",
    minHeight: "32px",
    minWidth: "0",
    padding: "0",
    fontSize: "18px",
    fontWeight: "bold",
  },

  img: {
    position: "absolute",
    left:'67px',
  },
};
