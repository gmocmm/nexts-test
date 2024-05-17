import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <label className="flex items-center justify-center bg-[#515151] rounded-[5px] px-[10px] py-[5px] w-full">
      <span className="text-[1.2em] pr-[.25em]">
        <CiSearch />
      </span>
      <input className="bg-transparent outline-0 w-full" type="text" placeholder="Type to search"/>
    </label>
  )
}

export default Search;
