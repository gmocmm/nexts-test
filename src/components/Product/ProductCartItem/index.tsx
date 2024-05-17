import Image from 'next/image';
import CounterButton from '../../Cart/CounterButton';
import { FaRegTrashAlt } from "react-icons/fa";

const ProductCartItem = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className='flex items-center'>
        <Image 
          width={60}
          height={60}
          src="https://images.unsplash.com/photo-1550259114-ad7188f0a967"
          alt=''
          className='rounded-[100%] mr-[1em] w-[4.5em] h-[4.5em]'
        />

        <h4 className='text-[1.5em] font-bold'>Fries with Ketchup</h4>

        <div className='flex text-[1.25em] ml-[2em] mr-[2em]'>
          <CounterButton text='-' />
          <span className="inline-block mx-[.5em] my-[0] font-bold">2</span>
          <CounterButton text='+' />
        </div>
      </div>

      <div className='flex items-center text-[1.25em]'>
        <span>
          $15.98
        </span>
        <span className='inline-block ml-[.5em]'>
          <FaRegTrashAlt />
        </span>
      </div>
    </div>
  )
}

export default ProductCartItem;
