'use client'
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children : ReactNode;
}

export default function ShowcaseHeightContainer({children} : Props){
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const getHeight = () => {
      const isMobile = window.innerWidth < 768; 
      const offset = isMobile ? 64 : 112;
      setHeight(Math.min(window.innerHeight - offset, 850))
    }

    getHeight();

    window.addEventListener("resize", getHeight);
    
    return () => window.removeEventListener("resize", getHeight);
  }, [])

  return (
    <div 
      style={{ height }}
      className="flex items-center justify-center p-2 md:p-5"
    >
      {children}
    </div>
  )
}