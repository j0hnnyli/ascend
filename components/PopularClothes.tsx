'use client'

import Product from "@/lib/types/productType"
import ImageChoiceComponent from "./ImageChoiceComponent"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";


type Props = {
  clothes : Product[]
}

export default function PopularClothes({clothes} : Props){
  const [currClothe, setCurrClothe] = useState<number>(0);

  const handlePrev = () => {
    setCurrClothe(currClothe - (currClothe === 0 ? 0 : 1))
  }

  const handleNext = () => {
    setCurrClothe(currClothe + (currClothe === clothes.length - 1 ? 0 : 1))
  }

  return (
      <div className="mx-auto w-[313px] font_crimson">
        <div className="text-[var(--primary-color)] flex justify-end items-center mb-2">
          <FaChevronLeft 
            onClick={handlePrev}
            className={twMerge("text-xl cursor-pointer", currClothe === 0 && "text-gray-500")}
          />
          <FaChevronRight 
            onClick={handleNext}
            className={twMerge("text-xl cursor-pointer", currClothe === clothes.length - 1 && "text-gray-500")}
          />
        </div>

        <div> 
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${currClothe * 100}%)` }}
            >
              {clothes.map((clothe) => (
                <div key={clothe.id} className="w-full h-[418px] flex-shrink-0">
                  <ImageChoiceComponent product={clothe} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-lg text-center">
            <h4>{clothes[currClothe].title}</h4>
            <p>${clothes[currClothe].price}</p>
          </div>
        </div>

      </div>
  )
}