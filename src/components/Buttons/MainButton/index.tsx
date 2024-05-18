type MainButtonProps = {
  text: string, 
  handler?: () => void
}

const MainButton = ({ text, handler }: MainButtonProps) => {
  return (
    <button 
      className='
      rounded-[15px] mt-[2em] px-[40px] py-[15px] 
      bg-black text-[#f1f1f1] 
      hover:text-black hover:bg-[#f1f1f1] ease-in duration-200'
      onClick={ handler ? handler : () => {} }
    >
      { text }
    </button>
  )
}

export default MainButton;