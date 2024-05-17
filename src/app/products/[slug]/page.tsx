import DetailsProductView from '../../../views/DetailsProductView';
import { IProduct } from '../../../interfaces/IProduct';
import { getProductBySlug } from './../../../services/products';

type ProductDetailsProps = {
  params: { 
    slug: string 
  }
}

const ProductDetails = async ({params}: ProductDetailsProps) => {
  const product:IProduct = await getProductBySlug(params.slug);
  
  return (
    <DetailsProductView 
      product={ product } 
    />
  )
}

export default ProductDetails;
