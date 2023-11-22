import React from "react";
import { actionStatus } from "../../Utils/utils";
import "./item.css";
import { changeStatus, deleteDataById } from "../../store/actions/actionsData";
import { useDispatch } from "react-redux";
const Item = ({ props,requestUpdate}) => {
  
  // store all app
  const dispatch = useDispatch();
  const { id, name, done } = props

  const handleDelete = (id)=>{
    dispatch(deleteDataById(id));
  }

  const handleUpdate = (id ,name)=>{
    debugger  
    requestUpdate(id,name);
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
      <div className={done === actionStatus.COMPLETE ? "complete" : ""} >{name}</div>
      <div>
        <button className="btn btn-update px-2" onClick={() => handleUpdate(id,name)}
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
