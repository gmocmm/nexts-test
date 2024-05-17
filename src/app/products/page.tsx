import ProductsListView from './../../views/ProductsListView';
import { IProduct } from './../../interfaces/IProduct';
import { getProducts } from './../../services/products';

const ProductsList = async () => {
  const products:IProduct[] = await getProducts();

  return (
    <ProductsListView 
      products={ products } 
    />
  )
}

export default ProductsList;
