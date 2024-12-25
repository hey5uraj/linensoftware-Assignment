import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, filters, onAddToCart }) => {

  const filteredProducts = products.filter((products) => {
    const isInPriceRange =
      (!filters.minPrice || products.price >= filters.minPrice) &&
      (!filters.maxPrice || products.price <= filters.maxPrice);
    const isTypeMatch =
      filters.type === "All" || products.type === filters.type;
    return isInPriceRange && isTypeMatch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sort === "asc") return a.price - b.price;
    if (filters.sort === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <div className="productContainer" >
        {
          sortedProducts.map((products) => {
            return (
              <div className="col" >
                <ProductCard key={products.id} products={products} onAddToCart={onAddToCart} />
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default ProductList
