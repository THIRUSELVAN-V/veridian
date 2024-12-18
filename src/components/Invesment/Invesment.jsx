import React from 'react'
import { Box,useTheme } from "@mui/material";
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import photo1 from "../../assets/Group3.png";
import photo2 from "../../assets/Group4.png";

import { styl } from './styls';
const Invesment = () => {
    const theme=useTheme();
    const style = styl(theme)
  return (
    <Box sx={style.First}>
        <Box sx={style.img1}>
            <img src={photo1} />
        </Box>
        <Box sx={style.img2}>
            <img src={photo2} />
        </Box>
        <Box sx={style.Inside}>
            <Box sx={style.Investment}>INVESTMENT MANAGEMENT</Box>
            <Box sx={style.Empowering}>
              Empowering Investments with Expertise and Strategy
            </Box>
            <Box sx={style.Knowmore}>
              <Box>Know more </Box>
              <Box sx={style.arrow}>
                <PiArrowElbowRightDownBold />
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Invesment