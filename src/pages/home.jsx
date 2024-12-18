import React from "react";
import {styl} from "./styles";
import { Box,useTheme } from "@mui/material";
import OurTeam from "../components/Ourteam/OurTeam";
import AboutUs from "../components/aboutUs/AboutUs";
import HolisticInvestment from "../components/HolisticInvestment/HolisticInvestment";
import Invesment from "../components/Invesment/Invesment";
import ContactUs from "../components/contactUs/ContactUs";
import Copyright from "../components/Copyright/Copyright";

function home() {
  const theme=useTheme();
  const style=styl(theme);
  return (
    <Box sx={style.Base}>
      <Box sx={style.Main} >
        <Invesment/>
        <Box sx={style.mid}>
            <AboutUs/>
            <OurTeam/> 
            <HolisticInvestment/>
        </Box>
        <ContactUs/>
      </Box>
      <Copyright/>
    </Box>
  );
}

export default home;
