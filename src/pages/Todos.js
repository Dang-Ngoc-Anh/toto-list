import { useContext, useRef } from "react";
import ItemList from "../components/ItemList/ItemList";
import Header from "../components/Layout/DefaulLayout/Header/Header";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../components/Theme/ThemeContext";
import Footer from "../components/Layout/DefaulLayout/Footer/Footer";
  
const Todos = ()=>{
    const inputRef = useRef();
    const listRef = useRef();
    const dispatch   = useDispatch();
    //   Theme
    const {theme} = useContext(ThemeContext);
    const requestUpdate = ({id,name})=> inputRef.current.changeTodoByInput({id,name});
    const filterData = (data) => listRef.current.displayDataFilter(data);
    dispatch({type:"SEARCH_STATUS_FAILURE"})

    return (<>
        <ItemList requestUpdate={requestUpdate} ref={listRef}/>
    </>)
}

export default Todos