type CounterButtonProps = {
  text: string, 
  handler: () => void
}

const CounterButton = ({ text, handler }: CounterButtonProps) => {
  return (
    <button 
      className='bg-[#d1d1d1] text-[#515151] rounded-[100%] w-[1.5em] h-[1.5em] flex items-center justify-center'
      onClick={ handler }
    >
      { text }
    </button>
  )
}

export default CounterButton;
