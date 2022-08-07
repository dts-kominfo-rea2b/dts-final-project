import { createContext, useState } from 'react';
const StateContext = createContext();

export default StateContext;


export const StateProvider = ({ children }) => {
    const [menuActive, setMenuActive] = useState(['1']);
    const [navMenu, setNavMenu] = useState(['1']);
    const [theme, setTheme] = useState('light');
    const contextData = {
        menuActive,
        setMenuActive,
        theme,
        setTheme,
        navMenu,
        setNavMenu
    }

    return (
        <StateContext.Provider value={contextData} >
            {children}
        </StateContext.Provider>
    )
}