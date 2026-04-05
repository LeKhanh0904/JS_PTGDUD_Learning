import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const createMockData = () => {
  const products = [];
  for (let i = 0; i < 5000; i++) {
    products.push({
      id: i,
      name: `Sản phẩm ${i} - ${Math.random().toString(36).substring(7)}`,
      price: Math.floor(Math.random() * 1000) + 1
    });
  }
  return products;
};

const DATA = createMockData();

function ProductsFilter(){
  const [products] = useState(DATA);
  const [query, setQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  
  const filteredProducts = useMemo(() => {
    console.time("Thời gian lọc");

    const result = products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(query.toLowerCase());
      const priceMatch = product.price >= Number(minPrice);
      return nameMatch && priceMatch;
    });
    
    console.timeEnd("Thời gian lọc");
    return result;
  }, [products,query,minPrice]);

  const totalPrice = useMemo(() => {
    console.log('Tổng tiền');
    return filteredProducts.reduce((total, item) => total + item.price, 0);
    
  }, [filteredProducts]);


  return (
      <div>
        <h2>Bài 3: useMemo Performance</h2>
      
      <div style={{ marginBottom: '20px', display: 'flex'}}>
        <input 
          placeholder="Tìm tên..." 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
        />
        <label> MinPrice: </label>
        <input 
          type="number" 
          value={minPrice} 
          onChange={e => setMinPrice(e.target.value)} 
        />
        
      </div>

      <hr />

      <h3>Tổng tiền: {totalPrice.toLocaleString()} $</h3>
      <p>Tìm thấy: {filteredProducts.length} sản phẩm</p>

      <ul>
        {filteredProducts.slice(0, 10).map(p => (
          <li key={p.id}>{p.name} - <strong>{p.price}$</strong></li>
        ))}
      </ul>
      </div>
  );
  
}



export default ProductsFilter;
