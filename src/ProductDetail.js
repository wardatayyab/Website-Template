import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
    const {id} = useParams();
    const [product,setProduct] = useState(null)

    const fetchProduct = async() =>{
          let response = await axios.get(`https://dummyjson.com/products/${id}`)
          setProduct(response.data)
          console.log(response.data)
    }

    useEffect(()=>{
        fetchProduct()
    },[id])
  return (
    <div>
    {product ? (
        <div>
            <h1>{product.title}</h1>
            <img src={product.images} alt={product.title} />
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <Link to={`/product/${product._id}`} className="btn btn-primary">Go to Product</Link>
        </div>
    ) : (
        <p>Loading product information...</p> // Placeholder when product is not available
    )}
</div>

  )
}



