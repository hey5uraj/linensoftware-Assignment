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

  const getCart = async () => {
    try {
      
    
    const cartRes = await axios.get(`http://localhost:3001/cart`);
    const { data } = cartRes;
    console.log(data);
    const total = data.reduce((total, item) => total + (item.price*item.quantity), 0);
    setTotalPrice(total)
  } catch (error) {
      console.log("error getting data")
  }
  }
  useEffect(() => {
    getAllproducts();
    getCart();
  }, [])





  const handleAddToCart = async (product) => {
    // setCart((prev) => {
    //   return [...prev, products]
    // })


    try {

      let cartData;
      try {
        const cartRes = await axios.get(`http://localhost:3001/cart/${product.id}`);
        cartData = cartRes.data;

      } catch (error) {
        console.log("no product with that id")
      }
      if (cartData) {


        const res = await axios.patch(`http://localhost:3001/cart/${product.id}`, {
          id: product.id,
          quantity: cartData.quantity + 1,
          price: product.price,
        })
      }
      else {
        const res = await axios.post(`http://localhost:3001/cart`, {
          id: product.id,
          quantity: 1,
          price: product.price,
        })

      }

    } catch (error) {
      console.log(error)
    }
    finally {
      getCart();
    }


  }

 







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
