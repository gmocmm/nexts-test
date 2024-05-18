'use client'

import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MainButton from '../../Buttons/MainButton';
import { CartContext } from '../../../contexts/cart';
import { IProduct } from './../../../interfaces/IProduct';

type AddButtonProps = {
  product: IProduct
}

const AddButton = ({ product }: AddButtonProps) => {
  const { addProduct } = useContext(CartContext);

  const addProductHandler = () => {
    addProduct(product);
    toast.success(`Added ${product.name} to cart`, {
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

  return (
    <MainButton 
      text='Add to cart'
      handler={ addProductHandler }
    />
  )
}

export default AddButton;