type CounterButtonProps = {
  text: string
}

const CounterButton = ({ text }: CounterButtonProps) => {
  return (
    <button className='bg-[#d1d1d1] text-[#515151] rounded-[100%] w-[1.5em] h-[1.5em] flex items-center justify-center'>
      { text }
    </button>
  )
}

export default CounterButton;
