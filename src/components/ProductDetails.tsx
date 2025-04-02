import React from 'react';
import { Product } from '../interfaces/product';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover my-4"
      />
      <p className="text-gray-300">{product.description}</p>
      <p className="text-lg font-semibold my-2">{product.price} zł</p>
      <p className="text-sm text-gray-400">Dostępna ilość: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;
