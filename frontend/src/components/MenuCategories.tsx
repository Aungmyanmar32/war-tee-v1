//MenuCategories.tsx
import React, { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import { AppContext } from "../contexts/AppContext";

const MenuCategories = () => {
  const contextData = useContext(AppContext);
  const { updateData, ...data } = contextData;

  useEffect(() => {
    fetchData();
    console.log(contextData);
  }, []);

  const fetchData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch("http://localhost:5006/menuCategories", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const menuCategoriesData = await response.json();
    updateData({ ...data, menuCategories: menuCategoriesData });
  };

  return (
    <div>
      <NavBar />
      <h1>MenuCategories page</h1>
    </div>
  );
};

export default MenuCategories;
