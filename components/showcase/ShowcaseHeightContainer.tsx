'use client'
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children : ReactNode;
}

export default function ShowcaseHeightContainer({children} : Props){
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const getHeight = () => {
      setHeight(Math.min(window.innerHeight - 112, 1000))
    }

    getHeight();

    window.addEventListener("resize", getHeight);
    
    return () => window.removeEventListener("resize", getHeight);
  }, [])

  return (
    <div 
      style={{ height }}
      className="flex items-center justify-center px-5"
    >
      {children}
    </div>
  )
}