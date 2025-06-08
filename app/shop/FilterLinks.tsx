'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type Props = {
  title : string;
}

export default function FilterLinks({ title } : Props){
  const pathname = usePathname(); 
  const currentCat = pathname.split('/')[2]?.toLowerCase() || '';  
  const titleLower = title.toLowerCase();


  const link = title === 'All' ? '/shop' : `/shop/${title}`

  const isActive = titleLower === 'all'
  ? currentCat === ''
  : currentCat === titleLower;
 
  return (
    <Link
      href={link}
      className={
        twMerge("hover:underline cursor-pointer",
          isActive && "underline"
        )
      }
    >
      {title}
    </Link>
  )
}