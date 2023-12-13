import Header from "./components/Layout/DefaulLayout/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Layout/DefaulLayout/Footer/Footer";
import {useContext, useEffect, useRef} from "react";
import Toggle from "./components/Toggle/Toggle";
import {ThemeContext} from "./components/Theme/ThemeContext";
import { FETCH_REQUEST, FETCH_SUCCESS, GET_TODOS, THEME, urlTodo } from "./Utils/utils";
import './style/toggle.css'
import { useDispatch, useSelector } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
function App() {
  const inputRef = useRef();
  const listRef = useRef();
  const dispatch   = useDispatch();
  // Theme
  const {theme} = useContext(ThemeContext);
  const requestUpdate = (id,name)=> inputRef.current.changeTodoByInput(id,name);
  const filterData = (data) => listRef.current.displayDataFilter(data);
  return ( 
   <div className={`toggle-${theme === THEME.dark ? THEME.dark : THEME.light }`}>
    <Toggle />
     <div className = {`container ${theme}`}>
        <Header ref={inputRef} />
        <ItemList requestUpdate={requestUpdate} ref={listRef}/>
        <Footer filterData={filterData}/>
    </div>
   </div>
  );
}

export default App;
