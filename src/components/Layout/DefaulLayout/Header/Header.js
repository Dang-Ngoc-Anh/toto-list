import React, {  forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import uuid from "react-uuid";
import "./header.css";
import { POST_REQUEST, PUT_REQUEST, actionStatus } from "../../../../Utils/utils";
import { useDispatch } from "react-redux";
import { postData, putDataById } from "../../../../store/actions/actionsData";
const Header = (props,ref) => {
  const dispatch = useDispatch();
  const [result , setResult ] = useState('');
  // const [idUpdate, setIdUpdate] = useState(undefined);
  const inputRef = useRef();
  const idUpdateRef = useRef(undefined);
  useEffect(()=>{
    console.log(idUpdateRef);
  })
  const handleKeyUp = (e,result) =>{
    const objInput = {
      name: result,
      done: actionStatus.ACTIVCE,
    };
    console.log(objInput);
    if (e.keyCode === 13 && result) {
      if(idUpdateRef) {
        dispatch({type:PUT_REQUEST , payload:{id:idUpdateRef.current ,name:result}});
        inputRef.current.focus();
      }else 
          {
            dispatch({type:POST_REQUEST , payload: objInput});
            setResult('');
          }
    }else
      inputRef.current.focus();

  }

  useImperativeHandle(ref, () => ({
    changeTodoByInput({id,name}){
      idUpdateRef.current = id;
      setResult(name);
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
