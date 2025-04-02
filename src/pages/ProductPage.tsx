import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductDetails from '../components/ProductDetails';
import QuantitySelector from '../components/QuantitySelector';
import { addToCart } from '../state/cart/cartSlice';
import { decreaseStock } from '../state/product/productSlice';
import { RootState } from '../state/store';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((product) => product.id === Number(productId))
  );
  const dispatch = useDispatch();

  const handleAddToCart = (quantity: number) => {
    if (product && quantity > 0) {
      dispatch(addToCart({ product, quantity }));
      dispatch(decreaseStock({ id: product.id, quantity }));
    }
  };

  if (!product) {
    return (
      <h1 className="text-2xl text-center font-semibold my-2">
        Produkt nie znaleziony
      </h1>
    );
  }
  return (
    <>
      <ProductDetails product={product} />
      <QuantitySelector stock={product.stock} onAddToCart={handleAddToCart} />
    </>
  );
};

export default ProductPage;
