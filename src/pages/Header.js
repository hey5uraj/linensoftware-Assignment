import React, { useState,useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../pages/Header.css"
import { AppContext } from '../components/layouts/Layout';


const Header = () => {

    const {totalPrice}=useContext(AppContext);

    return (
        <>
            <header className='headerDiv'>
                <div className="container">
                    <div className="logo-brand">
                        <h1>GFG Fruit & Vegetable Market</h1>
                    </div>

                    <div className="total-price">
                        <h1>Total Price:{totalPrice}</h1>
                    </div>

                    <div className="product-cart">
                        <ShoppingCartIcon />
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header
