'use client';

import { FilterContext } from "./../../../contexts/filter";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { search, setSearch } = useContext(FilterContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <label className="flex items-center justify-center bg-[#515151] rounded-[5px] px-[10px] py-[5px] w-full">
      <span className="text-[1.2em] pr-[.25em]">
        <CiSearch />
      </span>
      <input 
        value={ search }
        onChange={ handleInput }
        className="bg-transparent outline-0 w-full" 
        type="text" 
        placeholder="Type to search"
      />
    </label>
  )
}

export default Search;
