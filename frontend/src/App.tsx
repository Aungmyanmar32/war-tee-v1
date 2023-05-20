import { Box, Typography } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import { useEffect } from "react";

function App() {
  // const accessToken = localStorage.getItem("accessToken"); // getItem(key) = value = qwerewqrewqrewq.cxcbfhfdssfg
  // console.log("from App component", accessToken);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await fetch("http://localhost:5006/menus", {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   console.log(await response.json());
  // };

  return (
    <>
      <NavBar />
      <Box sx={{ mt: 5 }}>
        <Typography variant="h3">Welcome to Foodie POS</Typography>
      </Box>
    </>
  );
}

export default App;
