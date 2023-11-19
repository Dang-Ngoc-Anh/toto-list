import { createContext, useState } from "react";
import { THEME } from "../../Utils/utils";

const ThemeContext = createContext();
const Theme = ({children}) => {
    const [theme , setTheme ] = useState(THEME.light);
    const changeTheme = () => setTheme( theme === THEME.light ? THEME.dark : THEME.light ) 
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          {children}
        </ThemeContext.Provider>
      );
}

export  {Theme , ThemeContext}