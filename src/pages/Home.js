import React, { useEffect, useState } from "react";
import Item from "../components/Item/Item";
import ItemList from "../components/ItemList/ItemList";

const Home = ({ data }) => {
  return <ItemList data={data} />;
};

export default Home;
