'use client'

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ShowcaseHeightContainer from "./ShowcaseHeightContainer";


const showcaseSlides = [
  {
    title: "Shoes",
    img: "/showcase/shoes.jpg",
  },
  {
    title: "Clothes",
    img: "/showcase/clothes.jpg",
  },
  {
    title: "Electronics",
    img: "/showcase/technology.jpg",
  },
  {
    title: "Furniture",
    img: "/showcase/furniture.jpg",
  },
  {
    title: "Miscellaneous",
    img: "/showcase/miscellaneous.jpg",
  },
];

export default function Showcase(){
  const [slide, setSlides] = useState<number>(0);

  const handlePrevSlide = () => {
    setSlides(slide - (slide === 0 ? 0 : 1))
  }
 
  const handleNextSlide = () => {
    setSlides(slide + (slide === showcaseSlides.length - 1 ? 0 : 1))
  }

  return (
    <ShowcaseHeightContainer>
      <div 
        className="h-full w-full relative"
      >
        <Image
          src={showcaseSlides[slide].img}
          alt={showcaseSlides[slide].title}
          fill  
          priority={slide === 0}
          className="h-full w-full object-cover brightness-[85%] transition-all ease-in-out"
        />

        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 font_crimson text-white">
          <h3 className="text-4xl xl:text-8xl">  {showcaseSlides[slide].title} </h3>
          <button className="border py-2 px-4 mt-2 2xl:text-2xl font-bold">
            Shop Now
          </button>
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