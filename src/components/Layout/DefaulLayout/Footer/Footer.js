import React from "react";
import './footer.css'
import {useSelector ,useDispatch } from "react-redux";
import { clearStatus } from "../../../../store/actions/actionsData";
const Footer = (props) => {
  const {reducerData} = useSelector(state => state);
  const {filterData} = props
  const dispatch = useDispatch();
  const filterAll = ()=>{
      return filterData(reducerData);
  }
  const filterActive = ()=>{
    const dataActive = reducerData.filter(item => !item.done)
    return filterData(dataActive);

  } 
  
  const filterComplete = ()=>{
    const dataComplete = reducerData.filter(item => item.done)
    return filterData(dataComplete);
  }

  const filterClearComplete = ()=>{
    dispatch(clearStatus())
  }

  return (
    <div className="footer bg-cyan-800">
      <div className="footer-left text-1xl text-white ">{reducerData.length} item</div>
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
