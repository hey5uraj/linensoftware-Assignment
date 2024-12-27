import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CartProductItem = ({ item,cb }) => {

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(item.quantity)


    const getproduct = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/products/${item.id}`)
            const { data } = res;
            setProduct(data || null);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    useEffect(() => {
        getproduct();
        setQuantity(item.quantity)
    }, [item])


    const handleQuantity = async (type) => {

        let payload;
        if (type === "add") {
            payload = {
                id: product.id,
                quantity: quantity + 1
            }
        }
        else {
            if (quantity === 1) {
                const res = await axios.delete(`http://localhost:3001/cart/${product.id}`)
                cb();
                return;
            }
            payload = {
                id: product.id,
                quantity: quantity - 1
            }
        }

        const res = await axios.patch(`http://localhost:3001/cart/${product.id}`,payload )

        cb();


    }

    return (
        <div className='productItem'>
            <div className='productImage'>
                <img src={product.image} alt="" />
            </div>
            <div className='productInfo'>
                <div className='productName'>

                    <h2>
                        {product.name}

                    </h2>
                    <span>
                        {product.type}
                    </span>
                </div>
                <p>
                    {product.description}
                </p>
                <div>
                    <button onClick={() => { handleQuantity("add") }}>+</button>
                    <input type="number" value={quantity} disabled />
                    <button onClick={() => { handleQuantity("sub") }}>-</button>
                </div>

                <h2>
                    {product.price}
                </h2>

                <h1>
                    total price : {product.price * quantity}
                </h1>
            </div>
        </div>
    )
}

export default CartProductItem
