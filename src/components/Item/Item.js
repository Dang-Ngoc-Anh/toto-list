import React from "react";
import { actionStatus } from "../../Utils/utils";
import "./item.css";
const Item = ({ props }) => {
  const { id, name, loading, done } = props;
  const handleDelete = (id) => {
    console.log(props);
  };
  return (
    <div className={`item`} key={id}>
      <input
        type="checkbox"
        className={`checkbox ${
          done === actionStatus.COMPLETE ? "input__complete" : ""
        }`}
      />
      <div className={done === actionStatus.COMPLETE ? "complete" : ""}>
        {name}
      </div>
      <div>
        <button className="btn btn-update px-2">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="btn btn-delete px-2" onClick={handleDelete}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Item;
