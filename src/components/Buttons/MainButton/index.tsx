type MainButtonProps = {
  text: string, 
  handler: () => void
}

const MainButton = ({ text, handler }: MainButtonProps) => {
  return (
    <button 
      className='rounded-[15px] mt-[2em] px-[40px] py-[15px] bg-black text-[#f1f1f1]'
      onClick={ handler }
    >
      { text }
    </button>
  )
}

export default MainButton;