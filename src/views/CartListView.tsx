import Link from 'next/link';
import DetailsWrapper from './../components/DetailsWrapper';
import TitleNavigation from './../components/Navigation/TitleNavigation';
import ProductCartItem from './../components/Product/ProductCartItem';
import { IProduct } from '@/interfaces/IProduct';
import MainButton from '../components/Buttons/MainButton/index';

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
            products.length > 0 ? (
              products.map((item) => {
                return (
                  <ProductCartItem 
                    count={ item.count }
                    product={ item.product }
                    key={ `cart-item-${item.product.slug}` }              
                  />
                )
              })
            ): (
              <div className='flex flex-wrap flex-col items-center'>
                <h2 className='bold color-red-200 text-[2em] text-[red]'>No product added</h2>
                <Link href={'/products'}>
                  <MainButton text='See products' />
                </Link>
              </div>
            )
          }
          
        </div>
      </DetailsWrapper>
    </>
  )
}

export default CartListView;
