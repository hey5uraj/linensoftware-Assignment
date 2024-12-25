import React, { createContext, useState } from 'react';



export const AppContext = createContext();

const AppProvider  = ({children}) => {

    const [totalPrice,setTotalPrice]=useState(0);


  return (
    <AppContext.Provider value={{ totalPrice, setTotalPrice }} >
    {children}
    </AppContext.Provider>
  )
}

export default AppProvider 
