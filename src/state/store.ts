import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productsReducer from './product/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
