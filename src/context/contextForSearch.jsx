
import React, { createContext, useState } from 'react'

export const context = createContext()

const ContextForSearch = ({children}) => {
    const [cals, setcals] = useState(
        [10,2,3,4]
    )
    const [ searchTerm, setSearchTerm] = useState('')
  return (
    <context.Provider
        value={{
            searchTerm,
            setSearchTerm
        }}
    >
        {children}
    </context.Provider>
    
  )
}

export default ContextForSearch