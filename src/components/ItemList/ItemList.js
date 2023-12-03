import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { useSelector } from "react-redux";
import {useSroll} from '../hook/useScroll'
import useFetch from "../hook/useFetch";
import { urlTodo } from "../../Utils/utils";
const ItemList = (props ,ref) => {
  const listItemRef = useRef();
  const {requestUpdate} = props
  const dataStore = useSelector(state => state.reducerData);
  const {data:todos , loading , err} = useFetch(urlTodo);
  console.log(todos);
  console.log(loading);
  console.log(err);
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


  return (
    <div className="list__item" ref={listItemRef}>
      {loading && <h4 className='text-center'>Loading.....</h4>}
      {err && <h4 className='text-center'>{err}</h4>}
      {!loading && !err && <>{todos.map(item => <Item props={item} key={item.id} requestUpdate={requestUpdate}/> )}</>}
      {isGreeting && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default forwardRef(ItemList);
