import { useEffect, useState } from "react";
import { IProduct } from '@/interfaces/IProduct';

type CartProps = {
  product: IProduct, 
  count: number
}

const useCart = () => {
  const [products, setProducts] = useState<CartProps[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if(loaded) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products, loaded]);

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
    });
  }

  const removeProduct = (product: IProduct) => {
    setProducts((prevProducts) => {
      const products = prevProducts.filter((item) => {
        if(item.product.slug != product.slug) {
          return item;
        }
      });

      return products;
    });
  }

  const incrementProduct = (product: IProduct) => {
    setProducts((prevProducts) => {
      return prevProducts.map((item) => {
        return item.product.slug === product.slug ? { ...item, count: item.count + 1 } : item
      })
    });
  }

  const decrementProduct = (product: IProduct) => {
    setProducts((prevProducts) => {
      return prevProducts.map((item) => {
        return item.product.slug === product.slug ? { ...item, count: item.count - 1 } : item
      })
    });
  }

  return {
    products,
    addProduct,
    removeProduct,
    incrementProduct,
    decrementProduct
  }
}

export default useCart;