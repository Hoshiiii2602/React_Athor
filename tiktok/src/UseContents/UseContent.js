import React from 'react'
import UseDemo1 from './UseDemo1';
import { useState, createContext } from 'react';
import '../App.css';


// các bước làm useContent 
// 1. Create Context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext()

function UseContent() {

    const [theme, settheme] = useState("dark")

    const toggleTheme = () => {
        settheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle Click</button>
            <div><UseDemo1/></div>
        </ThemeContext.Provider>
    )
}

export default UseContent;