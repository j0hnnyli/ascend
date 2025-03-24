'use client'

import { AiOutlineLoading } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function LoadingIcon(){
  const pathname = usePathname();

  return (
    <div className={twMerge("flex justify-center items-center py-10", pathname === '/about' && 'text-white')}>
      <AiOutlineLoading className="text-5xl animate-spin"/>
    </div>
  )
}