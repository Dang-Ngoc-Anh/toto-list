import React, {  useRef, useState } from "react";
import uuid from "react-uuid";
import "./header.css";
import { actionStatus } from "../../../../Utils/utils";
const Header = ({addDataByInput}) => {
  const [result , setResult ] = useState('');
  const inputRef = useRef(null);
  const handleKeyUp = (e,result) =>{
    const objInput = {
      id: uuid(),
      name: result,
      done: actionStatus.ACTIVCE,
    };
    if (e.keyCode === 13) {
      result ? addDataByInput(objInput) : alert("ban chu nhap");
    }
  }
  return (
    <div className={`header`}>
      <h1 className="text-2xl font-bold">Todo</h1>
      <input
        type="text"
        placeholder="What need to be done "
        className="input"
        onKeyUp={(e) => handleKeyUp(e, result)}
        onChange={(e) => setResult(e.currentTarget.value)}
        value={result}
        ref={inputRef}
      />
    </div>
  );
};

export default Header;
