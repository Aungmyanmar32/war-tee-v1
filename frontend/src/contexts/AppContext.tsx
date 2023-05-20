import { createContext, useState } from "react";
import { Menu, MenuCategory } from "../types/Types";

interface ContextTypes {
  menu: Menu[];
  menuCategories: MenuCategory[];
  updateData: (value: any) => void;
}

const defaultContext: ContextTypes = {
  menu: [],
  menuCategories: [],
  updateData: () => {},
};

export const AppContext = createContext(defaultContext);

const AppProvider = (props: any) => {
  const [data, SetData] = useState(defaultContext);

  return (
    <AppContext.Provider value={{ ...data, updateData: SetData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
