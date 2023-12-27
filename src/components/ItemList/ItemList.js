import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { useDispatch, useSelector } from "react-redux";
import {useSroll} from '../hook/useScroll'
import { FETCH_REQUEST, urlTodo } from "../../Utils/utils";
import { useLocation } from "react-router-dom";
import { produce } from "immer";
const ItemList = (props ,ref) => {
  const listItemRef = useRef();
  const {requestUpdate} = props;
  const dataStore = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const loaction = useLocation();
  const queryParams = new URLSearchParams(loaction.search);
  const done = queryParams.get("done");
  let {
    dataScroll,
    setDataScroll,
    isGreeting
  } = useSroll(dataStore , listItemRef)

  // useImperativeHandle(ref, () => ({
  //   displayDataFilter(data){
  //     setDataScroll(data);
  //   }
  // }));

  useEffect(()=>{
    dispatch({type:FETCH_REQUEST , payload:{page:1 ,limit:10}})
  },[])
  
  useEffect(()=>{
    if(done === "false"){
      produce( dataStore, draft => {
          draft = draft.filter(item => !item.done);
          setDataScroll(draft)
      } )
    }else if(done === "true"){
        const dataCoppy = dataStore.filter(item => item.done);
        setDataScroll(dataCoppy)
    }
  } ,[done])
 
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
