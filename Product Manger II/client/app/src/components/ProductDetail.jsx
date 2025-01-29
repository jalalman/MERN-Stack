import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css'; // Import the CSS file

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">Product Detail</h1>
      <Link to="/" className="back-link">Back</Link>
      {product ? (
        <div className="product-detail">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;