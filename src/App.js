import Header from "./components/Layout/DefaulLayout/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Layout/DefaulLayout/Footer/Footer";
import {useContext, useRef} from "react";
import Toggle from "./components/Toggle/Toggle";
import {ThemeContext} from "./components/Theme/ThemeContext";
import { THEME } from "./Utils/utils";
import './style/toggle.css'
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { publicRouters } from "./Router";
import DefaultLayout  from './components/Layout/DefaulLayout'
function App() {
  return ( 
   <Router>
      <Routes>
        {
          publicRouters.map((route , index)=>{
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            )
          })
        }
      </Routes>
   </Router>
  );
}

export default App;
