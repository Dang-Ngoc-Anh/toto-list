import React, {  forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import uuid from "react-uuid";
import "./header.css";
import { FETCH_REQUEST_By_ID, POST_REQUEST, PUT_REQUEST, actionStatus } from "../../../../Utils/utils";
import { useDispatch } from "react-redux";
import { postData, putDataById } from "../../../../store/actions/actionsData";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
const Header = (props,ref) => {
  const dispatch = useDispatch();
  const [result , setResult ] = useState('');
  const inputRef = useRef();
  const {id} = useParams();
  const url = useLocation();
  const actionType = url.pathname.split('/');
  const handleKeyUp = (e,result) =>{
    const objInput = {
      name: result,
      done: actionStatus.ACTIVCE,
  };
    if (e.keyCode === 13) {
      if(id) {
        dispatch({type:PUT_REQUEST , payload:{id:id ,name:result}});
        inputRef.current.focus();
      }else 
          {
            dispatch({type:POST_REQUEST , payload: objInput});
            setResult('');
          }
    }else
      inputRef.current.focus();
  }

  // useImperativeHandle(ref, () => ({
  //   changeTodoByInput({id,name}){
  //     id.current = id;
  //     setResult(name);
  //     inputRef.current.focus();
  //   },
  // }));

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
