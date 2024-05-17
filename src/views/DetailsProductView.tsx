import ProductDetailsItem from './../components/Product/ProductDetailsItem';
import DetailsWrapper from './../components/DetailsWrapper';
import BackButton from './../components/Navigation/BackButton';
import { IProduct } from './../interfaces/IProduct';

type DetailsProductViewProps = {
  product: IProduct
}

const DetailsProductView = ({ product }: DetailsProductViewProps) => {  
  return (
    <DetailsWrapper>
      <BackButton href='/products' />
      <ProductDetailsItem 
        product={ product }
      />
    </DetailsWrapper>
  )
}

export default DetailsProductView;