import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left"></div>
      <div className="footer-center">
        <button className="btn btn-all px-3">All</button>
        <button className="btn btn-active px-3">Active</button>
        <button className="btn btn-complte px-3">Complte</button>
      </div>
      <div className="footer-right">
        <button className="btn px-3">Clear complte</button>
      </div>
    </div>
  );
};

export default Footer;
