import React from 'react'
import { Box,useTheme,Grid2, Typography } from "@mui/material";
import {styles } from "./style";
import photo from "../../assets/img1.png";
import { store } from "../../zustand/Zustand";
import Container from "./continer";
const AboutUs = () => {
    const theme = useTheme();
    const style = styles(theme);
    const aboutdata = store((state)=> state.about)
  return (
    <Box sx={style.boxabout}>
      <Box sx={style.About}>About Us</Box>
      <Box sx={style.box1}>
        <Box sx={style.phothoes}>
          <img src={photo} />
        </Box>
        <Box sx={style.Notes}>
          <Typography>
            Veridian is an investment, management and development company based
            in Gibraltar. We create value in our investments by leveraging our
            own experience, using tried-and-true strategies and extensive
            industry expertise.
          </Typography>
          <Typography>
            We work with our business management team to develop and implement
            tailored strategies focused on strong products with powerful sales,
            to develop profit generating growth models. Value creation is
            fundamental to our goal and we develop our businesses with this is
            mind
          </Typography>
          <Typography>
            Veridian's expertise is delivered with a responsible approach to our
            business, our team, our local community, and the environment.
          </Typography>
        </Box>
      </Box>

        <Box >
            <Grid2  container spacing={3} size={{ xs: 12, md: 12}} sx={style.grid} >
                {aboutdata.map((item, index) => (
                <Grid2  key={item.id} xs={4} sm={1} size={{ xs: 11.3, md: 5.05}}>
                    <Container
                    title={item.heading}
                    contant={item.body}
                    icon={item.img}
                    />
                </Grid2>
                ))}
            </Grid2>
        </Box>
    </Box>
  )
}

export default AboutUs