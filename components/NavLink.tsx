'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
  href : string;
  name : string;
}

export default function NavLink({ href, name} : Props ){
  const pathname = usePathname();


  return (
    <Link href={href} className={twMerge("pb-1", pathname === href && "border-b")}>{name}</Link>
  )
}