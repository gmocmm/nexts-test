import DetailsWrapper from '../../components/DetailsWrapper';
import TitleNavigation from '../../components/Navigation/TitleNavigation/index';
import ProductCartItem from '../../components/Product/ProductCartItem/index';

const Cart = () => {
  return (
    <DetailsWrapper>
      <TitleNavigation title='Shopping Cart' />
      <div className='w-full items-center mt-[2.5em] text-[8px] grid gap-[1.5em] grid-cols-[repeat(1,_1fr)] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
        <ProductCartItem />
        <ProductCartItem />
        <ProductCartItem />
        <ProductCartItem />
        <ProductCartItem />
        <ProductCartItem />
      </div>
    </DetailsWrapper>
  )
}

export default Cart;
