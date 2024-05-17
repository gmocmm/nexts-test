import Image from 'next/image';
import TitleNavigation from '../../Navigation/TitleNavigation';
import AddButton from '../../Cart/AddButton';
import { IProduct } from '../../../interfaces/IProduct';

type ProductDetailsItemProps = {
  product: IProduct
}
const ProductDetailsItem = ({ product }: ProductDetailsItemProps) => {
  return (
    <div className='w-full max-w-[720px]'>
      <div className='my-[1em] overflow-hidden'>
        <Image 
          width={720}
          height={420}
          src={ product.image }
          alt={ product.name }
          className='rounded-[10px] object-cover'
          style={{ maxHeight: '420px' }}
        />
      </div>

      <div>
        <TitleNavigation title={ product.name } />
        <span className='text-center font-bold text-[.9em] text-[#d1d1d1]'>${ product.price }</span>
        <p className='text-[.9em] m-0 my-[1em] p-0'>{ product.description }</p>
        <p className='text-[.9em] m-0 p-0'>Nutrition: { product.calorie } calories</p>
        <div className='w-full text-center'>
          <AddButton 
            slug={ product.slug } 
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsItem;
