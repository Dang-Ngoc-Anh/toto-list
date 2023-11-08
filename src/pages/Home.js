import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";

const Home = ({ data }) => {
  return <ItemList data={data} />;
};

export default Home;
