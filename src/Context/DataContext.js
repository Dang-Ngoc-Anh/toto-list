import React, { createContext, useState } from "react";

const DataContext = ({ childrens }) => {
  const [data, setData] = useState([
    {
      id: "sdfda-01",
      name: "this is data 1",
      loading: "all",
      done: "active",
    },
    {
      id: "sdfda-02",
      name: "this is data 2",
      loading: "all",
      done: "active",
    },
    {
      id: "sdfda-03",
      name: "this is data 3",
      loading: "all",
      done: "complete",
    },
  ]);
  const DataContext = createContext(data);
  return (
    <DataContext.Provider value={{ data }}>{childrens}</DataContext.Provider>
  );
};

export default DataContext;
