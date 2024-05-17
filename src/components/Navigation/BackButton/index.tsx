import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

type BackButtonProps = {
  href: string
}

const BackButton = ({ href } : BackButtonProps) => {
  return (
    <div className='w-full'>
      <Link
        href={href }
        className='flex items-center text-[1.5em]'
      >
        <IoMdArrowRoundBack />
        <span>Go Back</span>
      </Link>
    </div>
  )
}

export default BackButton;
