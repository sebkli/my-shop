import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from '../state/cart/cartSlice';
import { decreaseStock, increaseStock } from '../state/product/productSlice';
import { RootState } from '../state/store';
import CartItem from './CartItem';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (id: number, quantity: number) => {
    dispatch(removeFromCart({ id, quantity }));
    dispatch(increaseStock({ id, quantity }));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    const difference = newQuantity - item.quantity;

    if (difference > 0) {
      dispatch(decreaseStock({ id, quantity: difference }));
    } else if (difference < 0) {
      dispatch(increaseStock({ id, quantity: Math.abs(difference) }));
    }

    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Twój koszyk</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-400">Koszyk jest pusty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateQuantity={handleUpdateQuantity}
                item={item}
              />
            ))}
          </ul>
        )}
        <div className="mt-4 font-bold">Suma: {totalPrice.toFixed(2)} zł</div>
        {cartItems.length > 0 && (
          <button
            onClick={() => {
              dispatch(clearCart());
              onClose();
            }}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full"
          >
            Kup teraz
          </button>
        )}

        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded w-full"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default Cart;
