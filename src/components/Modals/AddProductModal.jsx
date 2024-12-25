import React, { useState } from 'react'
import { Modal } from '@mui/material'
import axios from 'axios'


const AddProductModal = ({ open, onClose, cb }) => {

    const [data, setData] = useState({
        name: "",
        type: "",
        price: "",
        description: "",
        image: "",
    })

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/products`, data)
            onClose();
            cb();

        } catch (error) {
            console.error('Error fetching products:', error);

        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;

        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className='modalContainer2'>
                <form className="formWrapper" onSubmit={handleAddProduct}>
                    <div className='inputDiv'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" value={data.name} onChange={handleInput} />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="">Type</label>
                        <select name="type" value={data.type} onChange={handleInput}>
                            <option value="" disabled>Add</option>
                            <option value="fruit">Fruits</option>
                            <option value="vegetable">Vegetable</option>
                        </select>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="">Price</label>
                        <input type="text" name="price" value={data.price} onChange={handleInput} />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="">Description</label>
                        <textarea type="text" name="description" value={data.description} onChange={handleInput} />
                    </div>

                    <button type="submit">Submit</button>

                </form>
            </div>
        </Modal>
    )
}

export default AddProductModal
