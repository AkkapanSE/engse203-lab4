
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        
        {/* TODO 1: สร้าง Dynamic Route สำหรับหน้ารายละเอียดสินค้า */}
         <Route path="products/:productId" element={<ProductDetailPage />} />
        {/* Path ควรเป็น /products/:productId */}
        
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
export default App;
