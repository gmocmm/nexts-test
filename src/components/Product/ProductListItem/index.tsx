import Image from 'next/image';
const ProductListItem = () => {
  return (
    <div className='bg-[#515151] rounded-[10px] overflow-hidden w-full max-w-[550px]'>
      <div className='relative w-full'>
        <Image 
          width={550}
          height={550}
          src="https://images.unsplash.com/photo-1550259114-ad7188f0a967"
          alt=''
        />
      </div>
      <div className='px-[1em] py-[1em] pb-[2em]'>
        <h2 className='font-bold text-[1.2em] m-0 p-0'>Fries with Ketchup</h2>
        <span className='block font-bold text-[.75em] text-[#d1d1d1]'>$499</span>
        <p className='text-[.9em] m-0 p-0'>A classic beef patty topped with lettuce, tomato, and our special sauce, served in a sesame seed bun.</p>
      </div>
    </div>
  )
}

export default ProductListItem;
