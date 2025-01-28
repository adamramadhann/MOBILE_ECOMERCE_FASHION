import React, { createContext, useContext, useEffect, useState } from 'react'

const CreateContextWhislist = createContext()

const ContextMyWhislist = ({children}) => {
const [saveCard, setSaveCard] = useState(false)

  const handleClick = () => {
    setSaveCard((val) => !val)
    localStorage.setItem('isHeart', JSON.stringify(!isHeart));
  }

  return (
    <CreateContextWhislist.Provider value={{ saveCard, setSaveCard, handleClick }} >
      {children}
    </CreateContextWhislist.Provider>
  )
}

export const useCardMW = () => {
  return useContext(CreateContextWhislist)
}

export default ContextMyWhislist