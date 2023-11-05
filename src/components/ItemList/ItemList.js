import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./item-list.css";
const ItemList = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Item props={item} key={item.id}/>
      ))}
    </>
  );
};

export default ItemList;
