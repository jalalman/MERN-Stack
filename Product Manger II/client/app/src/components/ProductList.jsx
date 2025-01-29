import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <h3 className="product-title">
              <Link to={`/products/${product._id}`} className="product-link">
                {product.title}
              </Link>
            </h3>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;