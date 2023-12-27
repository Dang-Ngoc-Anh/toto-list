import React, { useEffect, useState } from "react";
import './footer.css'
import {useSelector ,useDispatch } from "react-redux";
import { clearStatus } from "../../../../store/actions/actionsData";
import {useNavigate}from "react-router-dom"
const Footer = () => {
  const todos = useSelector(state => state.todos);
  const  [count ,setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filterAll = ()=>{
      setCount(todos.length);
      navigate(`/todos`)
  }
  const filterActive = ()=>{
    const dataActive = todos.filter(item => !item.done)
    if(dataActive){
        navigate(`/todos?done=false`)
    }
    setCount(dataActive.length)
  } 
  
  const filterComplete = ()=>{
    const dataComplete = todos.filter(item => item.done)
    if(dataComplete){
      navigate(`/todos?done=true`)
    }
    setCount(dataComplete.length)
  }

  const filterClearComplete = ()=>{
    dispatch(clearStatus())
  }

  useEffect(() => {
    // Update the count when the component is initially rendered and whenever todos change
    setCount(todos.length);
  }, [todos]);

  return (
    <div className="footer bg-cyan-800">
      <div className="footer-left text-1xl text-white ">{count} item</div>
      <div className="footer-center">
        <button className="btn btn-all px-3"onClick={()=>filterAll()} >All</button>
        <button className="btn btn-active px-3" onClick={()=>filterActive()}>Active</button>
        <button className="btn btn-complte px-3" onClick={()=>filterComplete()}>Complte</button>
      </div>
      <div className="footer-right">
        <button className="btn px-3" onClick={()=>filterClearComplete()}>Clear complte</button>
      </div>
    </div>
  );
};

export default Footer;
