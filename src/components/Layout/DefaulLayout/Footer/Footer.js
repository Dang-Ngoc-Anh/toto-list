import React from "react";
import './footer.css'
import { actionStatus } from "../../../../Utils/utils";
const Footer = ({switchAction , data}) => {
  
  return (
    <div className="footer bg-cyan-500">
      <div className="footer-left text-1xl text-white ">{data.length } item</div>
      <div className="footer-center">
        <button className="btn btn-all px-3"onClick={()=>switchAction(actionStatus.ALL)} >All</button>
        <button className="btn btn-active px-3" onClick={()=>switchAction(actionStatus.ACTIVCE)}>Active</button>
        <button className="btn btn-complte px-3" onClick={()=>switchAction(actionStatus.COMPLETE)}>Complte</button>
      </div>
      <div className="footer-right">
        <button className="btn px-3" onClick={()=>switchAction(actionStatus.CLEAR_COMPLETE)}>Clear complte</button>
      </div>
    </div>
  );
};

export default Footer;
