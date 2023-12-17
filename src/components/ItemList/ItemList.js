import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { useDispatch, useSelector } from "react-redux";
import {useSroll} from '../hook/useScroll'
import { FETCH_REQUEST, urlTodo } from "../../Utils/utils";
const ItemList = (props ,ref) => {
  const listItemRef = useRef();
  const {requestUpdate} = props;
  const dataStore = useSelector(state => state.todos);
  // const {data:todos , loading , err} = useFetch(urlTodo);
  const dispatch = useDispatch();
  let {
    dataScroll,
    setDataScroll,
    isGreeting
  } = useSroll(dataStore , listItemRef)

  useImperativeHandle(ref, () => ({
    displayDataFilter(data){
      setDataScroll(data);
    }
  }));

  useEffect(()=>{
    dispatch({type:FETCH_REQUEST , payload:{page:1 ,limit:10}})
  },[])
  return (
    <div className="list__item" ref={listItemRef}>
      {/* {loading && <h4 className='text-center'>Loading.....</h4>} */}
      {/* {err && <h4 className='text-center'>{err}</h4>} */}
      {<>{dataScroll.map(item => <Item props={item} key={item.id} requestUpdate={requestUpdate}/> )}</>}
      {isGreeting && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default forwardRef(ItemList);
