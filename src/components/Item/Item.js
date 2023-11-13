import React, { useEffect, useRef, useState } from "react";
import { actionStatus } from "../../Utils/utils";
import "./item.css";
const Item = ({ props, handleDelete,handleChangeState,requestUpdate,data,index}) => {
  const { id, name, done } = props
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const [dataCoppy , setDataCoppy] = useState(data);
  const handleSort = () => {
    //duplicate items
    let _data = [...dataCoppy];

    //remove and save the dragged item content
    const draggedItemContent = _data.splice(dragItem.current, 1)[0];

    //switch the position
    _data.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setDataCoppy(_data);
    console.log(dataCoppy);
  };
  return (
    <div 
      className={`item `} 
      key={index} 
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      >
      <div className="item__target flex justify-between" >
      <input
        type="checkbox"
        className={`checkbox ${
          done === actionStatus.COMPLETE ? "input__complete" : " "
        }`}
        onChange={(e) => {
          handleChangeState(e,id)
          }}
      />
      <div className={done === actionStatus.COMPLETE ? "complete" : ""} onClick={() => requestUpdate(id,name)}>
        {name}
      </div>
      <div>
        <button className="btn btn-update px-2" onClick={() => requestUpdate(id,name)}>
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
