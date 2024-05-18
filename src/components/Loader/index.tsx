'use client'

import { ReactNode, useEffect, useState } from "react";

type LoaderProps = {
  children: ReactNode
}

const Loader = ({ children }: LoaderProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if(!loaded) {
    return (
      <div>
        <h2>Loading ... </h2>
      </div>
    )
  }

  return (
    <>
      { children }
    </>
  )
}

export default Loader;