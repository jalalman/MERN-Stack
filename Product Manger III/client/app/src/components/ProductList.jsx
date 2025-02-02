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

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${productId}/delete`);
      setTrigger(!trigger); // Trigger a re-fetch of the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [products]);

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
            <div className="product-actions">
              <Link to={`/products/${product._id}/edit`} className="edit-button">
                <i className="fas fa-edit"></i> Edit
              </Link>
              <button className="delete-button" onClick={() => handleDelete(product._id)}>
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;