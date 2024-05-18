'use client'

import { Dispatch, ReactNode, SetStateAction, createContext } from 'react'
import useFilter from '../hooks/filter';

type FilterContextProps = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}

type FilterProviderProps = {
  children: ReactNode
}

export const FilterContext = createContext<FilterContextProps>({
  search: '',
  setSearch: () => {}
});

export default function FilterProvider ({ children }: FilterProviderProps) {
  const { search, setSearch } = useFilter();

  return (
    <FilterContext.Provider value={{
      search: search,
      setSearch: setSearch
    }}>
      { children }
    </FilterContext.Provider>
  )
}