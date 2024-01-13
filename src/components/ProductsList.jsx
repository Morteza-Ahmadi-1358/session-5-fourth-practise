import React, { useEffect, useState } from 'react'
import {getProducts} from '../database/Products'
import Loading from './Loading'

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setProducts(getProducts());
        }, 2000);
        return () => {
            setProducts([]);
        }
    }, [refresh]);
    if (products.length === 0) {
        return <Loading />
    }
  return (
    <div>
        {
            products.map((product) => {
                return <img src={product.imageUrl} alt="{product.productName}" className='border rounded m-3 py-3 shadow img-box' />
            })
        }
        <button type="button" onClick={() => {setRefresh(!refresh)}} className='btn btn-outline-danger fixed-top w-25'>بارگذاری مجدد</button>
    </div>
  )
}

export default ProductsList