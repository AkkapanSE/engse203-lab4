import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

function ProductDetailPage() {
  const { productId } = useParams(); // ดึง productId จาก URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* รูปสินค้า */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full md:w-1/2 h-96 object-contain"
      />

      {/* รายละเอียดสินค้า */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-green-600 text-xl font-semibold mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>

        {/* ปุ่ม Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-40"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;