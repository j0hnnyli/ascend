import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children : ReactNode;
  className ?: string;
}

export default function PaddingContainer({ children, className } : Props){
  return (
    <div 
      className={twMerge("p-2 md:py-16 md:px-5", className)}
    >
      {children}
    </div>
  )  
}