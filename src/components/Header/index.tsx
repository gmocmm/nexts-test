import Logo from "./Logo";
import Menu from "./Menu";
import Search from './Search';
import Cart from './Cart';

const Header = () => {
  return (
    <header>
      <div className="w-full flex-row items-center justify-between sm:flex">
        <div className="w-full flex items-center justify-center sm:justify-start">
          <div className="pr-[.5em]">
            <Logo />
          </div>
          <Menu />
        </div>
        <div className="flex items-center w-full pt-[.5em] sm:w-[22em] sm:pt-0">
          <div className="pr-[1.5em] w-full">
            <Search />
          </div>
          <Cart />
        </div>
      </div>
    </header>
  )
}

export default Header;
