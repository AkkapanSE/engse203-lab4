
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col">
      <Link to={`/products/${product.id}`} className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">{product.title}</h2>
        <p className="text-green-600 font-bold">${product.price}</p>
      </Link>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

// ✅ TODO 5: ใช้ React.memo กับ ProductCard
export default memo(ProductCard);
