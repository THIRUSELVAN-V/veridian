import React from 'react'
import { Box,useTheme } from "@mui/material";
import { styl } from './style';
const Copyright = () => {
    const theme=useTheme();
  const style=styl(theme);
  return (
    <Box sx={style.copy}>
        <Box sx={style.Copyright}>
          <Box >
            COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
            included on this website or incorporated by reference is protected
            by international copyright laws.
          </Box>
          <br />
          <Box>Term of use</Box>
        </Box>
    </Box>
  )
}

export default Copyright