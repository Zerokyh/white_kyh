"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Page = () => {
  const [menu, setMenu] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setMenu(event.target.value as string);
  };

  const MenuList = [
    { dropname: "월" },
    {
      month: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
    },
  ];

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{MenuList[0].dropname}</InputLabel>
        <Select
          labelId="select-label"
          id="select-menu"
          value={menu}
          label={MenuList[0].dropname}
          onChange={handleChange}
        >
          {MenuList[1].month &&
            MenuList[1].month.map((month, index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Page;
