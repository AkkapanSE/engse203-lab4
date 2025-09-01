import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mini E-commerce</h1>
      <p className="mb-6">This is a lab project for ENGSE203 to practice advanced React concepts.</p>

      <Link
        to="/products"
        className="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600 transition"
      >
        Go to Products
      </Link>
    </div>
  );
}

export default HomePage;