
import { Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


import { NameSaver } from './components/NameSaver';
import { LoginComponent } from './components/LoginComponent';
import { ShoppingCart } from './components/ShoppingCart';
import { ProductListPage } from './pages/ProductListPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import ParentComponent from './components/ParentComponent';

function App() {
  const activeLinkStyle = {
    color: '#0ea5e9',
    textDecorationLine: 'underline',
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-10">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">W6 Lab: Advanced React</div>
              <div className="flex space-x-6 text-gray-600 font-medium">
                <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Hook</NavLink>
                <NavLink to="/context" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Context</NavLink>
                <NavLink to="/redux" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Redux</NavLink>
                <NavLink to="/router" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Router</NavLink>
                <NavLink to="/performance" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Performance</NavLink>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Routes>
              <Route path="/" element={<NameSaver />} />
              <Route path="/context" element={<LoginComponent />} />
              <Route path="/redux" element={<ShoppingCart />} />
              <Route path="/router" element={<ProductListPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/performance" element={<ParentComponent />} />
            </Routes>
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;