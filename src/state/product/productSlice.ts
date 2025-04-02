import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';
import { mockProducts } from '../../mockData/mockProducts';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: mockProducts,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    decreaseStock: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.stock -= action.payload.quantity;
      }
    },
    increaseStock: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.stock += action.payload.quantity;
      }
    },
  },
});

export const { decreaseStock, increaseStock } = productsSlice.actions;
export default productsSlice.reducer;
