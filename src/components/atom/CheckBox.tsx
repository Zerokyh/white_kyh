import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckBox = () => {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Required" />
    </FormGroup>
  );
};

export default CheckBox;
