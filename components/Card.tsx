'use client'

import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  title : string;
  images : string[];
  price: number;
}

export default function Card({ title, images, price } : Props ){
  const [showImgNav, setShowImgNav] = useState<boolean>(false);
  const [currImg, setCurrImg] = useState<number>(0);

  const handlePrevImg = () => {
    if(currImg === 0 ) return;
    setCurrImg(currImg - 1)
  } 
 
  const handleNextImg = () => {
    if(currImg === images.length - 1) return;
    setCurrImg(currImg + 1)
  } 

  return ( 
    <motion.div 
      initial={{y:20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.7, ease: "easeIn"}}
      viewport={{once : true, amount : 0.2}}
      onMouseEnter={() => setShowImgNav(true)}
      onMouseLeave={() => setShowImgNav(false)}
      className="relative" 
    >
      {showImgNav && (
        <div className="absolute top-1/2 z-20 w-full">
          <div className="text-black flex justify-between items-center mb-2 px-2">
            <FaChevronLeft 
              onClick={handlePrevImg}
              className={twMerge("text-xl cursor-pointer", currImg === 0 && "text-gray-500")}
            />
            <FaChevronRight 
              onClick={handleNextImg}
              className={twMerge("text-xl cursor-pointer", currImg === images.length - 1 && "text-gray-500")}
            />
          </div>
        </div>
      )}

      <div 
        className="overflow-hidden relative"
      >
        <div 
          style={{ transform: `translateX(-${currImg * 100}%)` }}
          className="h-[250px] md:h-[525px] flex transition-all ease-in-out duration-500"
        >
          {images.map((img) => (
            <Image
              key={img}
              src={img}
              alt={title}
              width={300}
              height={400}
              className="w-full h-full object-cover brightness-90"
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
    </motion.div>
  )
}


