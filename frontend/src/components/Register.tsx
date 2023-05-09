import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <TextField
        id="outlined-basic"
        label="User Name"
        variant="outlined"
        sx={{ mt: 2 }}
      />
      <TextField
        id="outlined-basic"
        label="Eamil"
        variant="outlined"
        sx={{ mt: 2 }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        sx={{ mt: 2 }}
      />
      <Button variant="outlined" sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
