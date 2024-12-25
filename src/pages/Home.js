import React, { useState, useEffect, useContext } from 'react'
import Filters from '../components/Filters'
import axios from 'axios'
import ProductList from '../components/ProductList';
import useFetch from '../useFetch';
import Header from './Header';
import { AppContext } from '../components/layouts/Layout';
import AddProductModal from "../components/Modals/AddProductModal"

const Home = () => {


  const { totalPrice, setTotalPrice } = useContext(AppContext);

  const [cart, setCart] = useState([]);

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    type: "All",
    sort: "",
  });

  const [addProductModalToggle, setAddProductModalToggle] = useState(false);


  const handleAddProductModal = () => {
    setAddProductModalToggle(prev => !prev)
  }


  const [products, setProducts] = useState([]);

  const getAllproducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/products`)


      setProducts(res.data);

    } catch (error) {
      console.error('Error fetching products:', error);

    }
  }
  useEffect(() => {
    getAllproducts();
  }, [])





  const handleAddToCart = (products) => {
    setCart((prev) => {
      return [...prev, products]
    })



  }

  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total)
  }, [cart])




  // 


  return (
    <>
      <div className='pageDiv'>

        <Filters filters={filters} setFilters={setFilters} handleAddProductModal={handleAddProductModal} />
        <ProductList products={products || []} filters={filters} onAddToCart={handleAddToCart} />
      </div>


      <AddProductModal open={addProductModalToggle} onClose={handleAddProductModal} cb={getAllproducts} />

    </>
  )
}

export default Home
