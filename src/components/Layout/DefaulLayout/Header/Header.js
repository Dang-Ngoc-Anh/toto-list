import React, {  forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import uuid from "react-uuid";
import "./header.css";
import { actionStatus } from "../../../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { postData, putDataById } from "../../../../store/actions/actionsData";
const Header = (props,ref) => {
  const dispatch = useDispatch();
  const {reducerInput} = useSelector(state => state);
  const [result , setResult ] = useState('');
  const [idUpdate, setIdUpdate] = useState()
  const inputRef = useRef();

  const handleKeyUp = (e,result) =>{
    const objInput = {
      id: uuid(),
      name: result,
      done: actionStatus.ACTIVCE,
    };
    if (e.keyCode === 13 && result) {
      if(reducerInput) {
        dispatch(putDataById(idUpdate,result));
        setIdUpdate(undefined)
        inputRef.current.focus();
      }else 
        dispatch(postData(objInput));
        setResult('');
    } else
        inputRef.current.focus();
  }

  useImperativeHandle(ref, () => ({
    changeTodoByInput(id){
      setIdUpdate(id);
      inputRef.current.focus();
    },
  }));

  useEffect(() =>
    setResult(reducerInput)
  ,[reducerInput])
  
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
