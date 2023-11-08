import Header from "./components/Layout/DefaulLayout/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Layout/DefaulLayout/Footer/Footer";
import Data from './Data/data.json'
import { actionStatus } from "./Utils/utils";
import { createRef, useEffect, useState } from "react";
function App() {
  const [data , setData] = useState(Data);
  const [dataCurrent , setDatacurrent] = useState([]);
  useEffect(() => setDatacurrent(data) ,[data])
  // add value to data
  const addDataByInput = (value) => {
    setData([...data, value]);
  }
  
  const handleDelete = (id) =>{
    const dataCoppy = data.filter(item => item.id !== id);
    setData(dataCoppy) 
  }

  const handleUpdate = (value)=>{
    
  }
  const handleChangeState = (e,id)=>{
    const checked = e.currentTarget.checked;
    const dataCoppy = data.map(item => 
      {
        if(item.id === id){
          return {
            ...item,
            done: checked ? item.done = actionStatus.COMPLETE : item.done = actionStatus.ACTIVCE
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
        setDatacurrent(data.filter(item => item.done === actionStatus.ACTIVCE))   
        break
      case actionStatus.COMPLETE:
        setDatacurrent(data.filter(item => item.done === actionStatus.COMPLETE))
        break;
      case actionStatus.CLEAR_COMPLETE:
        return setDatacurrent(data.filter(item => item.done === actionStatus.COMPLETE)
        .map(item => item.done = actionStatus.ACTIVCE)  )    
      default:
        break;
    }
  }
  const props={
    data: dataCurrent,
    handleDelete:handleDelete,
    handleUpdate:handleUpdate,
    handleChangeState:handleChangeState
  }


  return ( 
    <div className="container">
        <Header addDataByInput={addDataByInput}/>
        <ItemList props={props}/>
        <Footer switchAction={switchAction} data={props.data}/>
    </div>
  );
}

export default App;
