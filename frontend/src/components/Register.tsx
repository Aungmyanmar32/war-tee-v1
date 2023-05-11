import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const register = async () => {
    const { name, email, password } = user;

    if (name && email && password) {
      const response = await fetch("http://localhost:5006/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(await response.json());
    } else {
      alert("Please fill all Info...");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
      <TextField
        label="Name"
        variant="outlined"
        sx={{ minWidth: "300px", mb: 2 }}
        onChange={(evt) => setUser({ ...user, name: evt.target.value })}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        sx={{ minWidth: "300px" }}
        onChange={(evt) => setUser({ ...user, email: evt.target.value })}
      />
      <TextField
        label="Password"
        variant="outlined"
        sx={{ minWidth: "300px", my: 2 }}
        type="password"
        onChange={(evt) => setUser({ ...user, password: evt.target.value })}
      />
      <Button variant="contained" onClick={register}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
