import Image from 'next/image';

const ProductDetailsItem = () => {
  return (
    <>
      <div className='w-full max-w-[720px] my-[1em]  overflow-hidden'>
        <Image 
          width={720}
          height={420}
          src="https://images.unsplash.com/photo-1550259114-ad7188f0a967"
          alt=''
          className='rounded-[10px] object-cover'
          style={{ maxHeight: '420px' }}
        />
      </div>

      <div className='w-full max-w-[720px]'>
        <h2 className='font-bold text-[2.2em] text-center m-0 p-0'>Fries with Ketchup</h2>
        <span className='text-center font-bold text-[.9em] text-[#d1d1d1]'>$499</span>
        <p className='text-[.9em] m-0 my-[1em] p-0'>A classic beef patty topped with lettuce, tomato, and our special sauce, served in a sesame seed bun.</p>
        <p className='text-[.9em] m-0 p-0'>Nutrition: 640 calories</p>
        <div className='w-full text-center'>
          <button className='rounded-[20px] mt-[2em] px-[40px] py-[15px] bg-black text-[#f1f1f1]'>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsItem;
