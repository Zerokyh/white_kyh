import { Box } from "@mui/material";
import SecondaryButton from "../atom/SecondaryButton";
import PrimaryButton from "../atom/PrimaryButton";

const RegisterBox = () => {
  const registerFormContext = "세척 품목을 등록하겠습니까?";
  return (
    <Box
      sx={{
        width: "330px",
        height: "100px",
        display: "flex",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          bgcolor: "#F3F3F3",
          px: "5px",
        }}
      >
        <Box>{registerFormContext}</Box>
        <Box>
          <SecondaryButton />
          <PrimaryButton />
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterBox;
