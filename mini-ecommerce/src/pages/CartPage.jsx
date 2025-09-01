
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul className="space-y-4">
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center justify-between border p-4 rounded">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
                className="w-16 p-1 border rounded"
              />
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
