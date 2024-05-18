import DetailsWrapper from './../components/DetailsWrapper';
import TitleNavigation from './../components/Navigation/TitleNavigation';
import ProductCartItem from './../components/Product/ProductCartItem';
import { IProduct } from '@/interfaces/IProduct';

type CartProps = {
  products: {
    product: IProduct, 
    count: number
  }[]
}

const CartListView = ({ products }: CartProps) => {
  return (
    <>
      <DetailsWrapper>
        <TitleNavigation title='Shopping Cart' />
        <div className='
          w-full items-center mt-[2.5em] text-[8px] 
          grid gap-[1em] grid-cols-[repeat(1,_1fr)] 
          sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]
        '>
          {
            products.map((item) => {
              return (
                <ProductCartItem 
                  count={ item.count }
                  product={ item.product }
                  key={ `cart-item-${item.product.slug}` }              
                />
              )
            })
          }
        </div>
      </DetailsWrapper>
    </>
  )
}

export default CartListView;
