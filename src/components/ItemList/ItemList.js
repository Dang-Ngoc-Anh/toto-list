import React, { useEffect, useRef, useState } from "react";
import Item from "../Item/Item";
import "./item-list.css";
const ItemList = ({ props}) => {
  const listItemRef = useRef();
  const {
    data,
    handleDelete,
    handleChangeState,
    handleUpdate,
    requestUpdate
  } = props

  const [dataScroll , setDataScroll] = useState(data)
  const [page , setPage] = useState(1);
  const [isLoading , setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = data.slice(page * 5, (page + 1) * 5);
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
    const isGreeting = false;
    const {scrollHeight , clientHeight , scrollTop } = listItemRef.current
    if((scrollHeight <= (clientHeight + scrollTop + 10)) && !isGreeting){
        fetchData();
    }
  }
  useEffect(() =>{
    listItemRef.current.addEventListener('scroll' , infinityScroll)
  },[isLoading])

  
  useEffect(() => {
    setDataScroll(data)
  }, [data]);
  return (
    <div className="list__item" ref={listItemRef}>
      {data.map((item , index) => (
        <Item 
          props={item}
          data={data} 
          key={`${item.id}-${Math.random()}`} 
          index={index}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleChangeState={handleChangeState}
          requestUpdate={requestUpdate}/>
      ))}
      {isLoading && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default ItemList;
