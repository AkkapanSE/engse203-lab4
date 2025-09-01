import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, title, price, image, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    // TODO 3: removeItem
    removeItem(state, action) {
      const idToRemove = action.payload; // payload = product id
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    // TODO 4: updateQuantity
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;