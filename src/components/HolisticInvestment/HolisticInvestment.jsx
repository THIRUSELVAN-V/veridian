import React from "react";
import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { stylesnew } from "./styles";
import Containerbox from "./container";
import { store } from "../../zustand/Zustand";
const HolisticInvestment = () => {
  const theme = useTheme();
  const styles = stylesnew(theme);
  const Holisticdata = store((state) => state.Holistic);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <Box sx={styles.investmentApproach}>Holistic Investment Approach</Box>
      <Box sx={{ display: "flex" }}>
        <Grid2 container spacing={4} sx={styles.con}>
          {Holisticdata.map((item, index) => (
            <Grid2 key={item.id} sx={{display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",}}>
              <Containerbox
                title={item.heading}
                para1={item.para1}
                img={item.img}
                para2={item.para2}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default HolisticInvestment;
