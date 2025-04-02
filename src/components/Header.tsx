import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { RootState } from '../state/store';
import Cart from './Cart';

const Header: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <Link to="/">
        <h1 className="text-xl font-bold">MyShop</h1>{' '}
      </Link>
      <button
        onClick={() => setModalOpen(true)}
        className={`px-4 py-2 rounded  ${
          cartCount > 0 ? 'bg-red-500 ' : 'bg-gray-500'
        }`}
      >
        Koszyk ({cartCount})
      </button>

      <Cart isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
};

export default Header;
