import React ,{ useEffect, useState } from 'react'
import axios from 'axios'

const ProductDetail = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((response)=> response.json())
        //     .then((data)=> setProducts(data))
        //     .catch((err) => console.error("Error fentching data", err))

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching data", err))
    }, [])

    if(!products){
           return <p>Loading.....</p> 
    }
    return (
      <>
        <button onClick={() => setProducts([])}>Remove Item</button>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
      </>
    )
}

export default ProductDetail
