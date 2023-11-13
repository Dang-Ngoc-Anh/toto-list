import React, {  forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import uuid from "react-uuid";
import "./header.css";
import { actionStatus } from "../../../../Utils/utils";
const Header = ({addDataByInput,updateTodo},ref) => {
  const [result , setResult ] = useState('');
  const [idUpdate, setIdUpdate] = useState()
  const inputRef = useRef();
  const handleKeyUp = (e,result) =>{
    const objInput = {
      id: uuid(),
      name: result,
      done: actionStatus.ACTIVCE,
    };
    if (e.keyCode === 13) {
      result ? addDataByInput(idUpdate,objInput) : alert("ban chu nhap");
      setIdUpdate(undefined)    
      setResult('')
    }
  }

  useImperativeHandle(ref, () => ({
    changeTodoByInput(id,value){
      setResult(null);
      setResult(value)
      setIdUpdate(id);
      inputRef.current.focus();
    },
  }));

  return (
    <div className={`header`}>
      <h1 className="text-2xl font-bold">Todo</h1>
      <input
        type="text"
        placeholder="What need to be done"
        className="input"
        onKeyUp={(e) => handleKeyUp(e, result)}
        onChange={(e) => setResult(e.currentTarget.value)}
        value={result}
        ref={inputRef}
      />
    </div>
  );
};

export default forwardRef(Header);
