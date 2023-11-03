import React from "react";
import './header.css'
const Header = () => {
  return <div className={`header`} >
  <h1 className="text-2xl font-bold">Todo</h1>
  <input 
      type="text" 
      placeholder="What need to be done " 
      className="input"
      // onKeyUp={this.handleKeyUp}
      // onChange={this.handleChange}
      // value={this.state.value}
      // ref={this.inputRef}
      />
</div>
};

export default Header;
