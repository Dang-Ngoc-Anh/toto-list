import React from "react";
import { actionStatus } from "../../Utils/utils";
import "./item.css";
const Item = ({ props, handleDelete,handleChangeState }) => {
  const { id, name, done } = props;
  return (
    <div className={`item flex justify-between`} key={id}>
      <input
        type="checkbox"
        className={`checkbox ${
          done === actionStatus.COMPLETE ? "input__complete" : ""
        }`}
        onChange={(e) => handleChangeState(e,id)}
      />
      <div className={done === actionStatus.COMPLETE ? "complete" : ""}>
        {name}
      </div>
      <div>
        <button className="btn btn-update px-2">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="btn btn-delete px-2" onClick={()=>handleDelete(id)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Item;
