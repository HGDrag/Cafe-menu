import { ProductCard } from './ProductCard';
import { useEffect, useState } from 'react';
const Main = () => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch('/products')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    
  return (
    <div className='main'>
      {
        data.map((product, i) => <ProductCard key = {i} name={product.name} price={product.price} type = {product.type} img = {product.image}/>)
      }
    </div>
  )
}

export default Main