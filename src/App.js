import Header from "./components/Layout/DefaulLayout/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Layout/DefaulLayout/Footer/Footer";
import Data from './Data/data.json'
import { actionStatus } from "./Utils/utils";
import {  cloneElement, useEffect, useRef, useState } from "react";
function App() {
  const [data , setData] = useState(Data);
  const [dataCurrent , setDatacurrent] = useState([]);
  const inputRef = useRef();
  useEffect(() => setDatacurrent(data) ,[data])
  // add value to data
  const addDataByInput = (id,obj) => {
    if(id) {
      const updatedData = data.map(item =>
        item.id === id ? { ...item, name:obj.name } : item
      );
      setData(updatedData);
    }else
      setData([...data, obj]);
  }
  
  const handleDelete = (id) =>{
    const dataCoppy = data.filter(item => item.id !== id);
    setData(dataCoppy) 
  }


  const requestUpdate = (id,value)=> inputRef.current.changeTodoByInput(id ,value);

  const handleChangeState = (e,id)=>{
    const checked = e.currentTarget.checked;
    const dataCoppy = data.map(item => 
      {
        if(item.id === id){
          return {
            ...item,
            done: checked ? actionStatus.COMPLETE : actionStatus.ACTIVCE
          }
        }else{
          return item
        }
      }
    );
    setData(dataCoppy)
  }
  const switchAction = (act)=>{
    switch (act) {
      case actionStatus.ALL:
        setDatacurrent(data)
        break;
      case actionStatus.ACTIVCE:
        setDatacurrent(data.filter(item => !item.done))   
        break
      case actionStatus.COMPLETE:
        setDatacurrent(data.filter(item => item.done ))
        break;
      case actionStatus.CLEAR_COMPLETE:
        return setDatacurrent(data.filter(item => item.done)
        .map(item => item.done = actionStatus.ACTIVCE)  )    
      default:
        break;
    }
  }
  const props={
    data: data,
    handleDelete:handleDelete,
    handleChangeState:handleChangeState,
    requestUpdate:requestUpdate
  }

  return ( 
    <div className="container">
        <Header addDataByInput={addDataByInput} ref={inputRef} />
        <ItemList props={props}/>
        <Footer switchAction={switchAction} data={props.data}/>
    </div>
  );
}

export default App;
