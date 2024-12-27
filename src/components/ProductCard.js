import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ products, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0)

  const getQuantity = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/cart/${products.id}`)
        const { data } = res;
        setQuantity(data.quantity);

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
useEffect(() => {
  getQuantity();
   
}, [products])

  const handleAddToCart = async() => {
    await onAddToCart(products)
    getQuantity();
  }

  return (
    <div className="product-card">
      <img src={products.image} alt={products.name} />
      <Link to={`/${products.id}`}>
        <h3>{products.name}</h3>
        <p>{products.description}</p>
        <p>Price: {products.price} Rs/Kg</p>
      </Link>
      <div className='productCardBtn' style={{ display: 'inline-block', }}>
        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button>  {quantity === 0 ? '-' : quantity}</button>
      </div>
    </div>
  )
}

export default ProductCard
