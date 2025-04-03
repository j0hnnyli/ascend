'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type Props = {
  title : string;
}

export default function FilterLinks({ title } : Props){
  const pathname = usePathname(); 
  const category = pathname.split("/")[2]; 

  return (
    <Link
      href={`/shop/${title}`}
      className={
        twMerge("hover:underline cursor-pointer",
          category  ===  title && "underline"
        )
      }
    >
      {title}
    </Link>
  )
}