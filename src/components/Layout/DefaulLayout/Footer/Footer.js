import React, { useEffect, useState } from "react";
import './footer.css'
import {useSelector ,useDispatch } from "react-redux";
import { clearStatus } from "../../../../store/actions/actionsData";
const Footer = (props) => {
  const todos = useSelector(state => state.todos);
  const  [count ,setCount] = useState(0);
  const {filterData} = props
  const dispatch = useDispatch();
  const filterAll = ()=>{
      setCount(todos.length)
      return filterData(todos);
  }
  const filterActive = ()=>{
    const dataActive = todos.filter(item => !item.done)
    setCount(dataActive.length)
    return filterData(dataActive);

  } 
  
  const filterComplete = ()=>{
    const dataComplete = todos.filter(item => item.done)
    setCount(dataComplete.length)
    return filterData(dataComplete);
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
