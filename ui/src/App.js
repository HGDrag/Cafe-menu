import react from 'react';
import { useEffect, useState } from 'react';

const App = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch('/products')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    
  return (
    <div>
      <ul>

        {
          data.map((product, i) => <li key={i}>{product.name}, {product.price}, {product.type}</li>)
          
        }
      </ul>
    </div>
  )

}
export default App;