import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layout from './components/layouts/Layout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}


          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=':productSlug' element={<ProductDetails />} />
          </Route>


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
