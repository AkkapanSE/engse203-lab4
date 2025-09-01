import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice'; // import removeItem

export function ShoppingCart() {
  const { items, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const handleAddItem = () => dispatch(addItem({ id: 'p1', name: 'Laptop' }));
  const handleRemoveItem = () => dispatch(removeItem({ id: 'p1' })); // แก้ไขให้เรียก removeItem

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Topic 3: Redux Toolkit</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Cart ({totalQuantity} items)</h3>
        <ul className="list-disc pl-5 mt-2">
          {items.map(item => <li key={item.id}>{item.name} (x{item.quantity})</li>)}
        </ul>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleAddItem}>Add Laptop</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" onClick={handleRemoveItem}>Remove Laptop</button>
      </div>
    </div>
  );
}