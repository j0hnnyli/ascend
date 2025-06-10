'use client'

import QuickAddButton from '@/components/QuickAddButton'
import Product from '@/lib/types/productType'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

type Props = {
  reccomendeds : Product[]
}

export default function ReccomendedDisplayContainer({ reccomendeds } : Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNextCarousel = () => {
    if(!carouselRef.current) return;

    carouselRef.current.scrollLeft += 260
  }
  
  const handlePrevCarousel = () => {
    if(!carouselRef.current) return;

    carouselRef.current.scrollLeft -= 260
  }

  return (
    <div className='max_width mx-auto'>
      <div className="flex items-center gap-5">
        <Image 
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className=""
        />

        <h2 className="font_crimson tracking-widest text-2xl md:text-4xl">
          Recommendations 
        </h2>
      </div>

      <div className='flex justify-end gap-5 ml-auto mt-5'>
        <button 
          onClick={handlePrevCarousel} 
          className='cursor-pointer hover:text-gray-500'
        >
          <FaChevronLeft/>
        </button>
        <button 
          onClick={handleNextCarousel} 
          className='cursor-pointer hover:text-gray-500'
        >
          <FaChevronRight/>
        </button>
      </div>

      <div 
        ref={carouselRef}
        className="w-full flex gap-5 overflow-auto no-scrollbar mt-5 scroll-smooth"
      >
        {reccomendeds.map((product) => (
          <div 
            key={product.id}
            className="relative flex-shrink-0 w-[250px]" 
          >
            <Link href={`/product/${product.id}`} className="absolute h-full w-full z-20"></Link>
            <div 
              className="h-[400px] relative"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={400}
                className="w-full h-full object-cover brightness-90"
              />
              <QuickAddButton product={product}/>
            </div>
      
            <div className="text-center w-full">
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

