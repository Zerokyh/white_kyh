"use client";

import * as React from "react";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import DropDownBox from "./conponents/atom/DropDownBox";
import InputBox from "./conponents/atom/InputBox";
import CheckBox from "./conponents/atom/CheckBox";
import RegisterBox from "./conponents/molecules/RegisterBox";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Button
        variant="contained"
        sx={{ width: "160px", borderRadius: 0 }}
        onClick={handleOpen}
      >
        <Box
          sx={{
            width: "100px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          등록
        </Box>
      </Button>
      <CheckBox />
      <DropDownBox />
      <InputBox />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RegisterBox />
        </Box>
      </Modal>
    </main>
  );
}
