import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { stylesnew } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import { store } from "../../zustand/Zustand";
const OurTeam = () => {
  const theme = useTheme();
  const styles = stylesnew(theme);
  const members=store((state)=>state.members)
  
  return (
    <Box sx={styles.layout}>
      <Box sx={styles.Our}>Our Team</Box>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={-170}
        centeredSlides={true}
        navigation={true} 
        modules={[Navigation]}
        style={styles.swiper}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index} style={styles.swiperslide}>
            <Box ml={"110px"}>
              <img src={member.img} alt="person" />
            </Box>
            <Box sx={styles.name}>
              <Typography sx={{ fontSize: "18px" }}>{member.name}</Typography>
              <Typography sx={{ fontSize: "14px" }}>
                {member.position}
              </Typography>
            </Box>
            <Typography sx={styles.about}>
              {member.about} <br /><br /> {member.about2}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default OurTeam;
