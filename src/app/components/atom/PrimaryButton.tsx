import * as React from "react";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const PrimaryButton = () => {
  const input = "등록";
  const buttonName = Array.from(input);
  return (
    <Button variant="contained" sx={{ width: "160px", borderRadius: 0 }}>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {buttonName.map((v) => (
          <span>{v}</span>
        ))}
      </Box>
    </Button>
  );
};

export default PrimaryButton;
