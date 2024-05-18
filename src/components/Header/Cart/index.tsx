import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <Link href={'/cart'}>
      <div className="text-[1.4em] relative">
        <span className="
          absolute top-[-1em] right-[-1em] w-[1.5em] h-[1.5em] 
          rounded-[100%] text-[.5em] font-bold 
          text-[#fff] bg-[#5C8C36] flex 
          items-center justify-center"
        >
          1
        </span>
        <FaShoppingCart />
      </div>
    </Link>
  )
}

export default Cart;
