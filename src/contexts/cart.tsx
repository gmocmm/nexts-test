'use client'

import { ReactNode, createContext } from 'react'
import useCart from '../hooks/cart'

type CartProps = {
  slug: string, 
  count: number
}

type CartContextProps = {
  products: CartProps[],
  addProduct: (slug: string) => void
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>({
  products: [],
  addProduct: () => {}
});

export default function CartProvider ({ children }: CartProviderProps) {
  const { products, addProduct } = useCart();

  return (
    <CartContext.Provider value={{ products, addProduct }}>
      { children }
    </CartContext.Provider>
  )
}
