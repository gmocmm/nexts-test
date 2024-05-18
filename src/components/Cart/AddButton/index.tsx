'use client'

import { useContext } from 'react';
import MainButton from '../../Buttons/MainButton';
import { CartContext } from '../../../contexts/cart';
import { IProduct } from '@/interfaces/IProduct';

type AddButtonProps = {
  product: IProduct
}

const AddButton = ({ product }: AddButtonProps) => {
  const { addProduct } = useContext(CartContext);

  const addProductHandler = () => {
    addProduct(product)
  }

  return (
    <MainButton 
      text='Add to cart'
      handler={ addProductHandler }
    />
  )
}

export default AddButton;