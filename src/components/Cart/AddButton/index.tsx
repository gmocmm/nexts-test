'use client'

import { useContext } from 'react';
import MainButton from '../../Buttons/MainButton';
import { CartContext } from '../../../contexts/cart';

type AddButtonProps = {
  slug: string
}

const AddButton = ({ slug }: AddButtonProps) => {
  const { addProduct } = useContext(CartContext);

  const addProductHandler = () => {
    addProduct(slug)
  }

  return (
    <MainButton 
      text='Add to cart'
      handler={ addProductHandler }
    />
  )
}

export default AddButton;