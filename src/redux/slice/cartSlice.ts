import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productProps as Product } from "../../types/type";

interface CartState {
  products: Product[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartState = {
  products: JSON.parse(localStorage.getItem('cart') || '[]'),
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index === -1) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        state.products[index].quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        if (state.products[index].quantity > 1) {
          state.products[index].quantity -= 1;
        } else {
          state.products = state.products.filter(product => product.id !== action.payload);
        }
        localStorage.setItem('cart', JSON.stringify(state.products));
      }
    },
    clearCartItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    updateProductQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const product = state.products.find(p => p.id === action.payload.productId);
      if (product) {
        product.quantity = action.payload.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    buyedItems: (state) => {
      state.products = [];
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeFromCart, clearCartItem, buyedItems, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;