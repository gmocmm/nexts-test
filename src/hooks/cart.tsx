import { useState } from "react";

type CartProps = {
  slug: string, 
  count: number
}

const useCart = () => {
  const [products, setProducts] = useState<CartProps[]>([]);

  const addProduct = (slug: string) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(item => item.slug === slug);

      if(existingProduct) {
        return prevProducts.map((item) => {
          return item.slug === slug ? { ...item, count: item.count + 1 } : item
        })
      }

      return [
        ...prevProducts,
        { 
          slug, 
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