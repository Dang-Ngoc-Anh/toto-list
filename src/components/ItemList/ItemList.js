import React, { useEffect, useRef, useState } from "react";
import Item from "../Item/Item";
import "./item-list.css";
import { actionStatus } from "../../Utils/utils";
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
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  
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

  
  const handleSort = () => {
    //duplicate items
    let _data = [...dataScroll];

    //remove and save the dragged item content
    const draggedItemContent = _data.splice(dragItem.current, 1)[0];

    //switch the position
    _data.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setDataScroll(_data);
  };
  return (
    <div className="list__item" ref={listItemRef}>
      { dataScroll.map((item , index) => (
        <div 
        className={`item `} 
        key={item.id} 
        draggable
        onDragStart={(e) => (dragItem.current = index)}
        onDragEnter={(e) => (dragOverItem.current = index)}
        onDragEnd={handleSort}
        onDragOver={(e) => e.preventDefault()}
        >
        <div className="item__target flex justify-between" >
        <input
          type="checkbox"
          className={`checkbox ${
            item.done === actionStatus.COMPLETE ? "input__complete" : " "
          }`}
          onChange={(e) => {
            handleChangeState(e,item.id)
            }}
        />
        <div className={item.done === actionStatus.COMPLETE ? "complete" : ""} onClick={() => requestUpdate(item.id,item.name)}>
          {item.name}
        </div>
        <div>
          <button className="btn btn-update px-2" onClick={() => requestUpdate(item.id,item.name)}>
            <i class="fa-solid fa-pen"></i>
          </button>
          <button className="btn btn-delete px-2" onClick={()=>handleDelete(item.id)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
        </div>
      </div>
      ))}
      {isLoading && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default ItemList;
