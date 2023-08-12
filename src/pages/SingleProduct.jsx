import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { useProduct } from '../contexts/ProductContext';
import "../App.css"

export const SingleProduct = () => {
    const { id } = useParams();
    const { products } = useProduct();
    const product = products.find(product => product.id == id);
    console.log(product)
    return (
    <div className='singleproduct'>
        <Sidebar />
        <div className='product-content'>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt='product-image' className='single-product-image'/>
            <p><strong>Price: {product.price}</strong></p>
            <p><strong>Stock: {product.stock}</strong></p>
            <p><strong>Supplier: {product.supplier}</strong></p>
            <p><strong>Department: {product.department}</strong></p>
            <p><strong>Delivered: {product.delivered}</strong></p>
            <p><strong>Description: {product.description}</strong></p>
        </div>
    </div>
  )
}
