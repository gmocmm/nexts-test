'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaHouse } from "react-icons/fa6";

const Menu = () => {
  const pathname = usePathname()
  
  return (
    <ul className="flex p-0 m-0 text-[1.4em]">
      <li className="p-0 m-0 inline-block">
        <Link
          className={`${pathname === '/' ? 'cursor-default' : ''}`}
          href="/"
        >
          <FaHouse />
        </Link>
      </li>
    </ul>
  )
}

export default Menu;
