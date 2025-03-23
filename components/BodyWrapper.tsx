'use client'

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
  children : ReactNode;
  className : string;
}

export default function BodyWrapper({ children, className } : Props){
  const pathname = usePathname();
  

  return (
    <main 
      className={twMerge(className, pathname === '/about' && 'bg-[var(--third-color)]')}
    >
      {children}
    </main>
  )
}