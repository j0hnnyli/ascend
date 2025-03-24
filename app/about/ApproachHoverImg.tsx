'use client'

import { useState } from "react";
import { motion } from 'framer-motion';
import Image from "next/image"
import { twMerge } from "tailwind-merge";
import RevealY from "@/components/animation-components/RevealY";

type Props = {
  img : string;
  title : string;
  description : string;
}

export default function ApproachHoverImg({img, title, description} : Props){
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <RevealY
      className="flex flex-col justify-center items-center"
    >
      <div 
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="relative h-[200px] w-[150px] md:h-[400px] md:w-[300px] overflow-hidden rounded-xl"
      >
        <Image
          src={img}
          alt={title}
          width={300}
          height={400}
          className={twMerge("w-full h-full object-cover brightness-90 transition-all ease-in-out duration-500", showInfo && "scale-110")}
        />
        {showInfo && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 w-full bg-black/65 p-2 text-left py-10"
          >
            <motion.p 
              initial={{ opacity: 0, y:  20 }}
              animate={{ opacity: 1, y:  0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white text-sm"
            >
              {description}
            </motion.p>
          </motion.div>
        )}
      </div>
      <h3 className="text-center text-md md:text-xl font_crimson">{title}</h3>
    </RevealY>
  )
}