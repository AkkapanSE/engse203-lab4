// src/pages/ProductDetailPage.jsx
import { useParams, Link } from 'react-router-dom';
export function ProductDetailPage() {
  const { productId } = useParams();
  return (
    <div>
      <Link to="/router" className="text-blue-600 hover:underline mb-4 block">&larr; Back to Products</Link>
      <h1 className="text-2xl font-bold">Details for Product: {productId}</h1>
    </div>
  );
}