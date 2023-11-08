import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import uuid from "react-uuid";
import { actionStatus } from "../../../Utils/utils";
import { Children, cloneElement, isValidElement, useState } from "react";
function DefaultLayout({ children }) {
  const [data, setData] = useState([]);
  const handleKeyUp = (e, result) => {
    const objInput = {
      id: uuid(),
      name: result,
      loading: actionStatus.ACTIVCE,
      done: actionStatus.ACTIVCE,
    };
    if (e.keyCode === 13) {
      result ? setData([...data, objInput]) : alert("ban chu nhap");
    }
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { data });
    }
    return child;
  });
  return (
    <div className="container">
      {/* <Header handleKeyUp={handleKeyUp} />
      <div className="body">{childrenWithProps}</div>
      <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
