import { useEffect, useState } from 'react'
import './Product.css'
import Product from '../Product/Product';

function Products({addToCart}) {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className='grid grid-cols-2 gap-4 p-2 m-1 sm:grid-cols-3'>
        {
          products.map(product => <Product 
            key={product.id} product = {product} 
            addToCart = {addToCart}
            ></Product> )
        }
    </div>
  )
}

export default Products