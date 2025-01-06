import React, { createContext, useContext, useState } from 'react'


const themeDarkMode = createContext()

const DarkMode = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)

    const ligh = () => setDarkMode(false)
    const night = () => setDarkMode(true)

  return (
    <themeDarkMode.Provider value={{ darkMode, ligh, night }} >
        {children}
    </themeDarkMode.Provider>
  )
}

export const useTheme = () => {
    const contex = useContext(themeDarkMode)
    if(!contex) return console.info('context infalid')
    return contex
}

export default DarkMode