'use client'

import { useContext } from "react";
import { CartContext } from '../../contexts/cart';
import CartListView from '../../views/CartListView';

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <CartListView 
      products={ products }
    />
  )
}

export default Cart;
