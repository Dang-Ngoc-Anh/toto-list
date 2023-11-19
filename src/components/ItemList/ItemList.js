import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { useSelector } from "react-redux";
import reducerData from "../../store/reducers/reducerData";
let isGreeting = false;
const ItemList = (props ,ref) => {
  const listItemRef = useRef();
  const {requestUpdate} = props
  const {reducerData:dataStore} = useSelector(state => state);
  const [data , setData] = useState(dataStore)
  const [dataScroll , setDataScroll] = useState(data)
  const [page , setPage] = useState(1);
  const [isLoading , setIsLoading] = useState(false);
  
  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = dataStore.slice(page * 5, (page + 1) * 5);
      setDataScroll(pre => [...pre , ...newData]);
      setIsLoading(false);
      setPage((prevPage) => prevPage + 1);
      // Đẩy thanh scroll lên
      window.scrollTo({
        top: listItemRef.current.offsetTop - 100, // Điều chỉnh giảm độ cao để thanh scroll không che phủ hoàn toàn nội dung mới
        behavior: "smooth",
      });
    }, 1000); 
  };

  const infinityScroll = ()=>{
    const {scrollHeight , clientHeight , scrollTop } = listItemRef.current
    if((scrollHeight <= (clientHeight + scrollTop + 10)) && !isGreeting){
        fetchData();
    }
  }
  useEffect(() =>{
    listItemRef.current.addEventListener('scroll' , infinityScroll)
  },[isLoading])

  useEffect(() => 
    setData(dataStore)
    ,[dataStore]
  )

  useImperativeHandle(ref, () => ({
    displayDataFilter(data){
      setData(data);
    }
  }));
  return (
    <div className="list__item" ref={listItemRef}>
      { data.map((item) => (
          <Item props={item} key={item.id} requestUpdate={requestUpdate}/>
      ))}
      {isLoading && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default forwardRef(ItemList);
