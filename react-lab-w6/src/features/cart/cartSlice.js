import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, price: 1500 });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem(state, action) { // เพิ่ม reducer ใหม่
      const id = action.payload.id;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions; // export action ใหม่
export default cartSlice.reducer;