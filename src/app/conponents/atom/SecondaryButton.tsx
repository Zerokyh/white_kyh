import * as React from "react";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const SecondaryButton = () => {
  const input = "아니오";
  const buttonName = Array.from(input);
  return (
    <Button
      variant="contained"
      sx={{
        width: "160px",
        bgcolor: "#F2F2F2",
        color: "black",
        "&:hover": {
          backgroundColor: "#b2bec3",
        },
        borderRadius: 0,
      }}
    >
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

export default SecondaryButton;
