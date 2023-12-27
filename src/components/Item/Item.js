import React, { useEffect, useRef, useState } from "react";
import { DELETE_REQUEST, PUT_REQUEST, UPDATE_DONE_REQUEST, actionStatus } from "../../Utils/utils";
import "./item.css";
import { changeStatus, deleteDataById } from "../../store/actions/actionsData";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Link } from "react-router-dom";
const Item = ({ props,requestUpdate }) => {
  const { id, name, done } = props
  const itemRef = useRef(null);
  const isCheckedRef  = useRef(false);
  let style = {};
  // store all app
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
      dispatch({type:DELETE_REQUEST,payload:id});
  }

  const move = (e)=>{
      const {clientX , clientY} = e
        style = {
          position:'fixed',
          top:clientY,
          let:clientX,
        }
  }
  const handleMoveDown = (e)=>{
    itemRef.current.addEventListener("mousemove" , move)
  }
  return (
    <div className={`item`}
      draggable={true}
      ref={itemRef}
      onMouseDown={handleMoveDown}
      style={style}
      onDragOver={e => e.preventDefault()}
    >
      <div className="item__target relative flex justify-between">
        <input
          type="checkbox"
          className={`checkbox ${
            done === actionStatus.COMPLETE ? "input__complete" : ""
          }`}
          onChange={(e) => {
            isCheckedRef.current =  e.currentTarget.checked;
            dispatch({type:UPDATE_DONE_REQUEST , payload:{id,done:isCheckedRef.current}});
            }}
        />
      <div className={done === actionStatus.COMPLETE ? "complete" : ""} >{name}</div>
      <div>
        <Link to={`/todos/update/${id}`}>
          <button className="btn btn-update px-2">
            <i class="fa-solid fa-pen"></i>
          </button>
        </Link>
       <Link  to={`/todos/delete/${id}`}>
        <button className="btn btn-delete px-2" onClick={()=>handleDelete(id)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
       </Link>
      </div>
      </div>
    </div>
  );
};

export default Item;
