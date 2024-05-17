import ProductDetailsItem from '../../../components/Product/ProductDetailsItem';
import DetailsWrapper from '../../../components/DetailsWrapper';
import BackButton from '../../../components/Navigation/BackButton';

type ProductDetailsProps = {
  params: { 
    slug: string 
  }
}

const ProductDetails = ({params}: ProductDetailsProps) => {
  return (
    <DetailsWrapper>
      <BackButton href='/products' />
      <ProductDetailsItem />
    </DetailsWrapper>
  )
}

export default ProductDetails;
