import react from 'react';
import { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import './App.css';
 const App = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch('/products')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    
  return (
    <div>
     { /* <ul>
        {
          data.map((product, i) => <li key={i}>{product.name}, {product.price}, {product.type}</li>)
        }
      </ul> */}
      {
        data.map((product, i) => <ProductCard key = {i} name={product.name} price={product.price} type = {product.type} img = {product.image}/>)
      }


      
    </div>
  )

}
export default App;