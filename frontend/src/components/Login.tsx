//Login.tsx

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const login = async () => {
    const response = await fetch("http://localhost:5006/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const responseData = await response.json(); //{accessToken:accessToken }
      const accessToken = responseData.accessToken;
      localStorage.setItem("accessToken", accessToken); // setItem(key , value)- getItem (key)= 1234
      navigate("/");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
      <TextField
        label="Email"
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
      <Button variant="contained" onClick={login}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
