'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from 'react';
import { CartContext } from "../../../contexts/cart";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { products } = useContext(CartContext);
  const [ quantityProducts, setQuantityProducts ] = useState<number>(0);

  useEffect(() => {
    const quantity = products.reduce((accumulator, currentValue) => {
      console.log(currentValue.count);
      return accumulator + currentValue.count
    }, 0);

    setQuantityProducts(quantity);

  }, [products]);

  return (
    <Link href={'/cart'}>
      <div className="text-[1.4em] relative">
        {
          quantityProducts > 0 && (
            <span className="
              absolute top-[-1em] right-[-1em] w-[1.5em] h-[1.5em] 
              rounded-[100%] text-[.5em] font-bold 
              text-[#fff] bg-[#5C8C36] flex 
              items-center justify-center"
            >
              { quantityProducts }
            </span>
          )
        }

        <FaShoppingCart />
      </div>
    </Link>
  )
}

export default Cart;
