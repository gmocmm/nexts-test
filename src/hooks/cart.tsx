import { useState } from "react";
import { IProduct } from '@/interfaces/IProduct';

type CartProps = {
  product: IProduct, 
  count: number
}

const useCart = () => {
  const [products, setProducts] = useState<CartProps[]>([]);

  const addProduct = (product: IProduct) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(item => item.product.slug === product.slug);

      if(existingProduct) {
        return prevProducts.map((item) => {
          return item.product.slug === product.slug ? { ...item, count: item.count + 1 } : item
        })
      }

      return [
        ...prevProducts,
        { 
          product: product, 
          count: 1 
        }
      ]
    })
  }

  return {
    products,
    addProduct
  }
}

export default useCart;