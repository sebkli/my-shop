import React from 'react';
import { CartItem as CartItemInterface } from '../interfaces/cartItem';

interface CartItemProps {
  item: CartItemInterface;
  handleUpdateQuantity: (id: number, quantity: number) => void;
  handleRemoveFromCart: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  handleUpdateQuantity,
  handleRemoveFromCart,
}) => (
  <li key={item.id} className="flex justify-between items-center border-b py-2">
    <div>
      <span>
        {item.name} ({item.quantity}x)
      </span>
      <p className="text-sm text-gray-500">{item.price} zł/szt.</p>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
        className="px-2 border hover:cursor-pointer"
        disabled={item.quantity <= 1}
      >
        -
      </button>
      <span className="px-2">{item.quantity}</span>
      <button
        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
        className="px-2 border"
        disabled={item.quantity >= item.stock}
      >
        +
      </button>
      <button
        onClick={() => handleRemoveFromCart(item.id, item.quantity)}
        className="ml-2 text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path
            d="M1.63,97.99l36.55-36.55L1.63,24.89c-2.17-2.17-2.17-5.73,0-7.9L16.99,1.63c2.17-2.17,5.73-2.17,7.9,0 
      l36.55,36.55L97.99,1.63c2.17-2.17,5.73-2.17,7.9,0l15.36,15.36c2.17,2.17,2.17,5.73,0,7.9L84.7,61.44l36.55,36.55 
      c2.17,2.17,2.17,5.73,0,7.9l-15.36,15.36c-2.17,2.17-5.73,2.17-7.9,0L61.44,84.7l-36.55,36.55c-2.17,2.17-5.73,2.17-7.9,0 
      L1.63,105.89C-0.54,103.72-0.54,100.16,1.63,97.99L1.63,97.99z"
          />
        </svg>
      </button>
    </div>
  </li>
);

export default CartItem;
