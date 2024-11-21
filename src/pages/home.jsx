import React from "react";
import { Main, Base, First, stylesnew, Inside } from "./styles";
import { Box } from "@mui/material";
import photo1 from "../assets/group3.png";
import photo2 from "../assets/group4.png";

function home() {
  return (
    <Base>
      <Main>
        <First>
          <Box sx={stylesnew.img1}>
            <img src={photo1} />
          </Box>
          <Box sx={stylesnew.img2}>
            <img src={photo2} />
          </Box>
          <Inside>
            <Box sx={stylesnew.Investment}>INVESTMENT MANAGEMENT</Box>
            <Box sx={stylesnew.Empowering}>Empowering Investments with Expertise and Strategy</Box>
            <Box sx={stylesnew.Knowmore}>Know more</Box>
          </Inside>
        </First>
      </Main>
      <Box>
        COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
        included on this website or incorporated by reference is protected by
        international copyright laws.
      </Box>
    </Base>
  );
}

export default home;
