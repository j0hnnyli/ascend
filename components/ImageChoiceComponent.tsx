import Product from "@/lib/types/productType"
import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge";

type Props = {
  product : Product;
  className?: string;
}

export default function ImageChoiceComponent({ product, className } : Props){
  const [currImgIndex, setCurrImgIndex] = useState<number>(0)

  return (
    <div className={twMerge("relative", className)}>
      <Image
        src={product.images[currImgIndex]}
        alt={product.title}
        width={300}
        height={400}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-5 w-full flex items-center justify-center">
        <div className="flex gap-3">
          {product.images.map((img, i) => (
            <div key={img} 
              onMouseEnter={() => setCurrImgIndex(i)}
              className={twMerge("w-8 h-10 cursor-pointer",currImgIndex === i && "border")}
            >
              <Image
                src={img}
                alt={img}
                width={300}
                height={300}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}