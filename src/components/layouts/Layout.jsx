import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../../pages/Header'


export const AppContext = createContext();

const Layout = () => {

  const [totalPrice, setTotalPrice] = useState(0);


  return (
    <AppContext.Provider value={{ totalPrice, setTotalPrice }} >
      <Header totalPrice={totalPrice} />

      <Outlet />

    </AppContext.Provider>
  )
}

export default Layout
