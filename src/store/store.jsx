import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  createitem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

const Store = ({ children }) => {
  const [items, setItems] = useState([]);

  const createitem = (item) => {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  };

  const getItem = (id) => {
    const item = items.find((item) => item.id === id);

    return item;
  };

  const updateItem = (items) => {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];

    temp[index] = { ...item };
  };

  return (
    <AppContext.Provider
      value={{
        items,
        createitem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default Store;
