//Menus.tsx
import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { AppContext } from "../contexts/AppContext";
import { Console } from "console";

interface Menu {
  id?: number;
  name: string;
  price: number;
}
const Menus = () => {
  const accessToken = localStorage.getItem("accessToken");

  const contextData = useContext(AppContext);
  const { updateData, ...data } = contextData;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5006/menus", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const menuData = await response.json();

    updateData({ ...data, menu: menuData });
    console.log("context data", contextData);
  };

  return (
    <div>
      <NavBar />
      <h1>Menus List</h1>
    </div>
  );
};

export default Menus;
