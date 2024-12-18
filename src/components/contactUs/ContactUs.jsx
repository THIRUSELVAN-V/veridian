import React from 'react'
import { Box,useTheme } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import photo3 from "../../assets/Maskgroup1.png";
import photo4 from "../../assets/Maskgroup2.png";
import { styl } from './style';
const ContactUs = () => {
    const theme=useTheme();
    const style = styl(theme)
  return (
    <Box sx={style.Last}>
        <Box sx={style.img1}>
            <img src={photo3} />
        </Box>
        <Box sx={style.img2}>
            <img src={photo4} />
        </Box>
        <Box sx={style.contactUs}>
            <Box sx={style.contact}>Contact Us</Box>
            <Box>
              Have questions or need more information? Reach out to us at.{" "}
            </Box>
            <Box sx={style.email}>
              <Box sx={style.mail}>MAIL TO</Box>
              <Box>info@veridian.com</Box>
              <Box sx={style.rarrow}>
                <FaArrowRight />
              </Box>
            </Box>
            <Box>'We're help to help!'</Box>
        </Box>
    </Box>
  )
}

export default ContactUs