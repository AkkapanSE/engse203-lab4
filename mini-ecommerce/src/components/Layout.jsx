
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed */}
      <nav className="bg-gray-950 text-white p-4 shadow fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/">MyStore</Link>
          </h1>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="hover:underline flex items-center">
                Cart
                {totalQuantity > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 container mx-auto p-6 mt-20"> {/* ✅ mt-20 ให้เนื้อหาไม่ซ่อนหลัง Navbar */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 p-4 text-center">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
