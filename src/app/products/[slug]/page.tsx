import ProductDetailsItem from '../../../components/Product/ProductDetailsItem';
import DetailsWrapper from '../../../components/DetailsWrapper';
import BackButton from '../../../components/Navigation/BackButton';
import { IProduct } from '../../../interfaces/IProduct';
import { getProductBySlug } from '@/services/products';

type ProductDetailsProps = {
  params: { 
    slug: string 
  }
}

const ProductDetails = async ({params}: ProductDetailsProps) => {
  const product:IProduct = await getProductBySlug(params.slug);
  
  return (
    <DetailsWrapper>
      <BackButton href='/products' />
      <ProductDetailsItem 
        product={ product }
      />
    </DetailsWrapper>
  )
}

export default ProductDetails;
