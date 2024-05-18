import { useState } from "react";

const useFilter = () => {
  const [search, setSearch] = useState<string>('');
  
  return {
    search,
    setSearch 
  }
}

export default useFilter;