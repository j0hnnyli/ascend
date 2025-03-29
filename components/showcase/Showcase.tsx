'use client'

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ShowcaseHeightContainer from "./ShowcaseHeightContainer";
import Link from "next/link";


const showcaseSlides = [
  {
    title: "Fashion",
    img: "/showcase/fashion.jpg",
    href: "/Clothes"
  },
  {
    title: "Electronics",
    img: "/showcase/technology.jpg",
    href : "/Electronics"
  },
  {
    title: "Furniture",
    img: "/showcase/furniture.jpg",
    href: "/Furniture"
  },
];

export default function Showcase(){
  const [slide, setSlides] = useState<number>(0);

  const handlePrevSlide = () => {
    setSlides((prevIndex) => prevIndex - 1);
  }
 
  const handleNextSlide = () => {
    setSlides((prevIndex) => prevIndex + 1);
  }

  return (
    <ShowcaseHeightContainer>
      <div 
        className="h-full w-full relative overflow-hidden "
      >
        <div 
          className="w-full h-full flex transition-all ease-in-out duration-500" 
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {showcaseSlides.map((currSlide) => (
            <div 
              key={currSlide.title} 
              className="w-full h-full flex-shrink-0 relative"
            >
              <Image
                src={currSlide.img}
                alt={currSlide.title}
                fill
                className="h-full w-full object-cover brightness-[80%]"
              />
              <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 font_crimson text-white">
                <h3 className="text-4xl mb-2">{currSlide.title}</h3>
                <Link href={`shop/${currSlide.href}`} className="border py-2 px-4 2xl:text-2xl font-bold hover:bg-[var(--secondary-color)] hover:text-black">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between w-full text-white absolute top-1/2 bottom-1/2">
          {slide !== 0 ? (
              <button 
                onClick={handlePrevSlide}
                className="cursor-pointer"
              >
                <FaChevronLeft className="text-3xl"/>
              </button>
            ) : <div></div>
          }

          {
            slide !== showcaseSlides.length - 1 ? (
              <button
                onClick={handleNextSlide}
                className="cursor-pointer"
              >
                <FaChevronRight className="text-3xl"/>
              </button>
            ) : <div></div>
          }
        </div>
      </div>
    </ShowcaseHeightContainer>
  )
}