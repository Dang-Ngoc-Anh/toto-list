import React, { useEffect, useRef, useState } from "react";
import "./header.css";
const Header = ({ handleKeyUp }) => {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
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
