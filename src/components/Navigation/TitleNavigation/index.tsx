type TitleNavigationProps = {
  title: string
}

const TitleNavigation = ({ title }: TitleNavigationProps) => {
  return (
    <h2 className='font-bold text-[2.2em] text-center m-0 p-0'>
      { title }
    </h2>
  )
}

export default TitleNavigation;
