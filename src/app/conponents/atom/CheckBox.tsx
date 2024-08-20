import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

const CheckBox = () => {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="내용" />
      </FormGroup>
    </Box>
  );
};

export default CheckBox;
