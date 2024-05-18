import { useContext } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { FaRegTrashAlt } from "react-icons/fa";
import CounterButton from '../../Cart/CounterButton';
import { IProduct } from './../../../interfaces/IProduct';
import { CartContext } from './../../../contexts/cart';


type ProductCartItem = {
  product: IProduct,
  count: number
}

const ProductCartItem = ({ count, product }: ProductCartItem) => {
  const { removeProduct } = useContext(CartContext);

  const handleRemoveProduct = () => {
    removeProduct(product);
    toast.info(`Product ${product.name} removed successfully`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }

  const price = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' }
  ).format(product.price * count);
  
  return (
    <div className="flex items-center justify-between w-full">
      <div className='flex items-center'>
        <Image 
          width={60}
          height={60}
          src={ product.image }
          alt=''
          className='rounded-[100%] mr-[1em] w-[4.5em] h-[4.5em]'
        />

        <h4 className='text-[1.5em] font-bold'>{ product.name }</h4>

        <div className='flex text-[1.25em] ml-[2em] mr-[2em]'>
          <CounterButton text='-' />
          <span className="inline-block mx-[.5em] my-[0] font-bold">{ count }</span>
          <CounterButton text='+' />
        </div>
      </div>

      <div className='flex items-center text-[1.25em]'>
        <span>
          { price }
        </span>
        <button 
          className='inline-block ml-[.5em]'
          onClick={ handleRemoveProduct }
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  )
}

export default ProductCartItem;
