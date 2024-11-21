import React from "react";
import {
  Main,
  Base,
  First,
  stylesnew,
  Inside,
  Copyright,
  Last,
  Lanka,
} from "./styles";
import { Box } from "@mui/material";
import photo1 from "../assets/group3.png";
import photo2 from "../assets/group4.png";
import photo3 from "../assets/Maskgroup1.png";
import photo4 from "../assets/Maskgroup2.png";
import { PiArrowElbowRightDownBold } from "react-icons/pi";

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
            <Box sx={stylesnew.Empowering}>
              Empowering Investments with Expertise and Strategy
            </Box>
            <Box sx={stylesnew.Knowmore}>
              <Box>Know more </Box>
              <Box sx={stylesnew.arrow}>
                <PiArrowElbowRightDownBold />
              </Box>
            </Box>
          </Inside>
        </First>
        <Last>
          <Box sx={stylesnew.img1}>
            <img src={photo3} />
          </Box>
          <Box sx={stylesnew.img2}>
            <img src={photo4} />
          </Box>
          <Lanka>
            <Box sx={stylesnew.contact}>Contact Us</Box>
            <Box>
              Have questions or need more information? Reach out to us at.{" "}
            </Box>
            <Box sx={stylesnew.email}>info@veridian.com</Box>
            <Box>'We're help to help!'</Box>
          </Lanka>
        </Last>
      </Main>
      <Copyright>
        <Box sx={stylesnew.Copyright}>
          <Box>
            COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
            included on this website or incorporated by reference is protected
            by international copyright laws.
          </Box>
          <Box>Term of use</Box>
        </Box>
      </Copyright>
    </Base>
  );
}

export default home;
