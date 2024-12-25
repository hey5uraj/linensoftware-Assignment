import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ products, onAddToCart }) => {
  const [clickCount, setClickCount] = useState(0)
  const handleAddToCart = () => {
    setClickCount(clickCount + 1)
    onAddToCart(products)
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
        <button>  {clickCount === 0 ? '-' : clickCount}</button>
      </div>
    </div>
  )
}

export default ProductCard
