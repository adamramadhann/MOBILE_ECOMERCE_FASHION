import React, { createContext, useContext, useEffect, useState } from 'react'


const cardCreatContext = createContext()

const saveLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

const getFromLocalstorage = (key) => {
  try {
    const value = localStorage.getItem(key) 
    return value ? JSON.parse(value) : null
  } catch (error) {
    console.error(error)
  }
}

const SaveCardContext = ({ children }) => {

    const [card, setCard] = useState(() => getFromLocalstorage('appData') || {})

    useEffect(() => {
      console.log(card);
      
      saveLocalStorage('appData', card)
    },[card])
  return (
    <cardCreatContext.Provider value={{ 
        card,
        setCard
    }} >
        { children }
    </cardCreatContext.Provider>
  )
}


export const useCard = () => { 
    return useContext(cardCreatContext)
}

export default SaveCardContext