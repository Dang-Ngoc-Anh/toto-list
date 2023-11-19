import React, { useEffect, useRef, useState } from "react";
import { actionStatus } from "../../Utils/utils";
import "./item.css";
import { changeStatus, deleteDataById, putDataById } from "../../store/actions/actionsData";
import { useDispatch, useSelector } from "react-redux";
import { getResultInput } from "../../store/actions/actionInput";
const Item = ({ props,requestUpdate}) => {
  
  // store all app
  const dispatch = useDispatch();
  const { id, name, done } = props

  const handleDelete = (id)=>{
    dispatch(deleteDataById(id));
  }
  const handleUpdate = (result)=>{
    dispatch(getResultInput(result));
  }
  return (
    <div 
      className={`item `} >
      <div className="item__target flex justify-between" >
      <input
        type="checkbox"
        className={`checkbox ${
          done === actionStatus.COMPLETE ? "input__complete" : ""
        }`}
        onChange={(e) => {
          let checked = e.currentTarget.checked;
          dispatch(changeStatus(id,checked));
          }}
      />
      <div className={done === actionStatus.COMPLETE ? "complete" : ""} onClick={() =>{
          requestUpdate(id);
          handleUpdate(name)}}>
        {name}
      </div>
      <div>
        <button className="btn btn-update px-2" onClick={() => {
          requestUpdate(id);
          handleUpdate(name)}}
          >
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="btn btn-delete px-2" onClick={()=>handleDelete(id)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Item;
