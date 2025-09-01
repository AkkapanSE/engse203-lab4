// src/pages/ProductListPage.jsx
import { Link } from 'react-router-dom';
const products = [{id: 'p1', name: 'Laptop'}, {id: 'p2', name: 'Mouse'}];

export function ProductListPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Topic 4: React Router</h2>
      <p>Select a product:</p>
      <ul className="list-disc pl-5 mt-2 space-y-2">
        {products.map(p => (
          // BUG: Link ที่สร้างขึ้นมี path ไม่ถูกต้อง
          <li key={p.id} className="text-blue-600 hover:underline">
            <Link to={`/product/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}