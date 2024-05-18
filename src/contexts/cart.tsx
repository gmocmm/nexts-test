'use client'

import { ReactNode, createContext } from 'react'
import useCart from '../hooks/cart'
import { IProduct } from '@/interfaces/IProduct';

type CartProps = {
  product: IProduct, 
  count: number
}

type CartContextProps = {
  products: CartProps[],
  addProduct: (product: IProduct) => void,
  removeProduct: (product: IProduct) => void
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {}
});

export default function CartProvider ({ children }: CartProviderProps) {
  const { 
    products, 
    addProduct, 
    removeProduct 
  } = useCart();

  return (
    <CartContext.Provider value={{ 
      products, 
      addProduct, 
      removeProduct 
    }}>
      { children }
    </CartContext.Provider>
  )
}
