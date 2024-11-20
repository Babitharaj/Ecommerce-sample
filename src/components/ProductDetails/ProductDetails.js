import React, { useEffect, useState } from 'react'
import { getProductId } from '../../ApiService/api';
import { Link, useParams } from 'react-router-dom';
import "./ProductDetails.css";

function ProductDetails() {
    
const {id}= useParams();
  const [pdDetails, setPdDetails] = useState({})

  useEffect(() => {
    const fetchProductDetails = async ()=>{
      const data = await getProductId(id);
      setPdDetails(data)
      // console.log(data,"data");
      }
      fetchProductDetails()
  }, [id])


  const handleBuyNow =()=>{
    window.confirm("The product is out of stock..!")
  }
  
  return (
    <div className='pd-container'>
        <img className="pd-image" src={pdDetails?.image} alt="image"/>
        
        <div className='product-info'>
           
           <h2 className='product-title'>{pdDetails?.title}</h2>
           
           <p className='product-description'>{pdDetails?.description}</p>

           <p className='product-price'>${pdDetails.price}</p>

           <button className='buy-now-btn' onClick={handleBuyNow}>Buy Now</button>

           <Link to="/" style={{textDecoration:"none"}}>
           <button className='back-btn'>Go back</button>
           </Link>

        </div>

    </div>
  )
}

export default ProductDetails