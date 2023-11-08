import React from "react";
import Item from "../Item/Item";
import "./item-list.css";
const ItemList = ({ props}) => {
  const {data,handleDelete,handleChangeState} = props
  return (
    <div className="list__item" >
      {data.map((item) => (
        <Item props={item} key={item.id} handleDelete={handleDelete} handleChangeState={handleChangeState}/>
      ))}
    </div>
  );
};

export default ItemList;
