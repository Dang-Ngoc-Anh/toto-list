import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { useSelector } from "react-redux";
import {useSroll} from '../hook/useScroll'
import { logDOM } from "@testing-library/react";
let isGreeting = false;
const ItemList = (props ,ref) => {
  const listItemRef = useRef();
  const {requestUpdate} = props
  const {reducerData:dataStore} = useSelector(state => state);
  let {dataScroll ,isGreeting} = useSroll(dataStore , listItemRef)

  // useImperativeHandle(ref, () => ({
  //   displayDataFilter(data){
  //     dataScroll = data;
  //   }
  // }));

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
