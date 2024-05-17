import ProductDetailsItem from '../../../components/Product/ProductDetailsItem/index';

import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

type ProductDetailsProps = {
  params: { 
    slug: string 
  }
}

const ProductDetails = ({params}: ProductDetailsProps) => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center flex-wrap bg-[#515151] rounded-[10px] overflow-hidden w-full max-w-[920px]'>
        <div className='w-full py-[2em] px-[2em]'>
          <Link
            href="/products"
            className='flex items-center text-[1.5em]'
          >
            <IoMdArrowRoundBack />
            <span>Go Back</span>
          </Link>
        </div>

        <ProductDetailsItem />
      </div>
    </div>
  )
}

export default ProductDetails;
