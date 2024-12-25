import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirmation from '../components/DeleteConfirmation'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

  const { productSlug } = useParams();
  const URL = "http://localhost:3001/products"


  const navigate = useNavigate();

  const [deleteModal, setDeleteModal] = useState(false);
  const [product, setProduct] = useState([]);




  const getproduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/products/${productSlug}`)
      const { data } = res;
      setProduct(data || null);

    } catch (error) {
      console.error('Error fetching products:', error);

    }
  }
  useEffect(() => {
    getproduct();
  }, [])


  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:3001/products/${productSlug}`)

      navigate("/products")

    } catch (error) {
      console.error('Error fetching products:', error);

    }
  }
 




  const handleDeleteModal = () => {
    setDeleteModal(prev => !prev);

  }



  return (
    <div className="container">
      <section className='user-section'>
        <div className="container">
          <h1>Porduct Detail</h1>
        </div>
        <div className='mainDiv'>
          <div className='prodImg'>
            <img src={product.image} alt="" />
          </div>
          <div className='prodDetail'>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <span onClick={handleDeleteModal}>

              <DeleteIcon />
            </span>
          </div>
        </div>




      </section>

      <DeleteConfirmation
        onCancel={handleDeleteModal}
        onConfirm={() => { handleDelete(); handleDeleteModal() }}
        open={deleteModal}>
        <h2>Delete User</h2>
        <p>Are you sure you want to delete this Product?</p>

      </DeleteConfirmation>
    </div>
  )
}

export default ProductDetails
