import { ReactNode } from "react";

type DetailsWrapperProps = {
  children: ReactNode
}

const DetailsWrapper = ({ children } : DetailsWrapperProps) => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center flex-wrap bg-[#515151] rounded-[10px] overflow-hidden w-full max-w-[920px] px-[2em] pt-[2em] pb-[4em]'>
        { children }
      </div>
    </div>
  )
}

export default DetailsWrapper;
