'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
  href : string;
  name : string;
}

const aboutPath = '/about'

export default function NavLink({ href, name} : Props ){
  const pathname = usePathname();

  return (
    <Link href={href} 
      className={twMerge("pb-1 hover:scale-105", 
        pathname.includes(name.toLowerCase()) && "border-b border-black",
        pathname === aboutPath && "border-white")
      }
    >
      {name}
    </Link>
  )
}