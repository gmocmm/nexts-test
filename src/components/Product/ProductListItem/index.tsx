import Image from 'next/image';
import { IProduct } from '@/interfaces/IProduct';

type ProductListItemProps = {
  product: IProduct
}

const ProductListItem = ({ product } : ProductListItemProps) => {
  return (
    <div className='
    bg-[#515151] rounded-[10px] overflow-hidden
      w-full h-full max-w-[550px] scale-[1] 
      hover:scale-[1.025] ease-in duration-200
    '>
      <div className='relative w-full'>
        <Image 
          width={550}
          height={420}
          src={product.image}
          alt={product.name}
          className='object-cover'
          style={{ height: '24vw', minHeight: '320px' }}
        />
      </div>
      <div className='px-[1em] py-[1em] pb-[2em]'>
        <h2 className='font-bold text-[1.2em] m-0 p-0'>{ product.name }</h2>
        <span className='block font-bold text-[.75em] text-[#d1d1d1]'>${product.price}</span>
        <p className='text-[.9em] m-0 p-0'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductListItem;
