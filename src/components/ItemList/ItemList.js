import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { useSelector } from "react-redux";
import {useSroll} from '../hook/useScroll'
const ItemList = (props ,ref) => {
  const listItemRef = useRef();
  const {requestUpdate} = props
  const {reducerData:dataStore} = useSelector(state => state);
  let {
    dataScroll ,
    setDataScroll,
    isGreeting
  } = useSroll(dataStore , listItemRef)

  useImperativeHandle(ref, () => ({
    displayDataFilter(data){
      setDataScroll(data);
    }
  }));

  // console.log(dataScroll);

  return (
    <div className="list__item" ref={listItemRef}>
      {dataScroll.map((item) => (
          <Item props={item} key={item.id} requestUpdate={requestUpdate}/>
      ))}
      {isGreeting && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default forwardRef(ItemList);
