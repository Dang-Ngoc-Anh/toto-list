import { useContext } from "react";
import { THEME } from "../../../Utils/utils";
import Toggle from "../../Toggle/Toggle";
import { ThemeContext } from "../../Theme/ThemeContext";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function DefaultLayout({ children }) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`toggle-${theme === THEME.dark ? THEME.dark : THEME.light }`}>
     <Toggle />
     <div className = {`container ${theme}`}>
      <Header />
       {children}
       <Footer />
    </div>
    </div>
  );
}

export default DefaultLayout;
