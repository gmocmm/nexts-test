type MainButtonProps = {
  text: string
}

const MainButton = ({ text }: MainButtonProps) => {
  return (
    <button 
      className='rounded-[15px] mt-[2em] px-[40px] py-[15px] bg-black text-[#f1f1f1]'
    >
      { text }
    </button>
  )
}

export default MainButton;