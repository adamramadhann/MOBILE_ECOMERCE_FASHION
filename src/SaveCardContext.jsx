import React, { createContext, useContext, useState } from 'react'


const cardCreatContext = createContext()

const SaveCardContext = ({ children }) => {

    const [card, setCard] = useState([])


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