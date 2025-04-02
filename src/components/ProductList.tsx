import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../interfaces/product';
import { RootState } from '../state/store';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

const PRODUCTS_PER_PAGE = 3;

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Lista produktów</h1>
      <ul className="space-y-4">
        {paginatedProducts.map((product: Product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalItems={products.length}
        itemsPerPage={PRODUCTS_PER_PAGE}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </>
  );
};

export default ProductList;
