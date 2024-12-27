import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartProductItem from '../components/CartProductItem'




const Carts = () => {

    const [cart, setCart] = useState([])

    const getAllCarts = async () => {
        try {
            const res = await axios.get("http://localhost:3001/cart")
            setCart(res.data);
          
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCarts();
    }, [])


    



    return (
        <div className='cont'>

        <div className='cartWrapper'>
                <h3>Cart</h3>
            <div className="cart">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <CartProductItem item={item} key={index} cb={getAllCarts}/>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
        </div>
       
    )
}

export default Carts
