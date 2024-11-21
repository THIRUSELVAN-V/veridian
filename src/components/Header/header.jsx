import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import photo from "../../assets/Maskgroup.jpg";
import { Mainhead, stylesnew } from "./styles";

function header() {
  const [active, setActive] = useState("1");
  const tabs = [
    {
      label: "Home",
      value: "1",
    },
    {
      label: "About Us",
      value: "2",
    },
    {
      label: "Our Team",
      value: "3",
    },
    {
      label: "Investment Approach",
      value: "4",
    },
    {
      label: "Contact Us",
      value: "5",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };
  return (
    <Mainhead>
      <Box sx={stylesnew.img}>
        <img src={photo} />
      </Box>

      <Tabs value={active} onChange={handleTabChange} sx={stylesnew.tabs}>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            sx={stylesnew.tab}
          />
        ))}
      </Tabs>
    </Mainhead>
  );
}

export default header;
