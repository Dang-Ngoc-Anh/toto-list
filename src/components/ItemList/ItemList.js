import React from "react";
import Item from "../Item/Item";
import data from '../../Data/Data.json'
import './item-list.css'
const ItemList = () => {
  return <>
    {data.map(item => <Item props={item} key={item.id}/>)}
  </>;
};

export default ItemList;
