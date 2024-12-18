import { Box, Typography,useTheme } from "@mui/material";
import React from "react";
import { styles } from "./style";


function continer({title = "",contant,icon}) {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <Box sx={style.left}>
      <Box sx={style.con_l}>
        <Typography sx={style.con_l_head}>{title}</Typography>
        <Typography sx={style.con_l_body}>
          {contant}
        </Typography>
      </Box>
      <Box sx={style.con_r}>
        <img src={icon} />
      </Box>
    </Box>
  );
}

export default continer;
