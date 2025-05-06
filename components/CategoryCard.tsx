'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  img: string;
  description: string;
  href: string;
};

export default function CategoryCard({ title, img, href }: Props) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.div
      variants={{
        hidden: { x:-50, opacity: 0 }, 
        show: {
          x : 0,
          opacity: 1,
          transition: {
            duration: 0.6, 
            ease: "easeOut",
            type: 'spring'
          }
        },
      }}
      className={twMerge("relative h-[100px] lg:h-[400px] flex-grow overflow-hidden bg-[var(--primary-color)] rounded-lg text-white cursor-pointer transition-all", isHover && "h-[400px]")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="absolute w-full h-full left-10 lg:left-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover w-full h-full brightness-90"
        />
      </div>

      <h2
        className="absolute top-4 left-4 text-2xl font-bold z-10 text-gray-900"
      >
        {title}
      </h2>

      {isHover && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 bg-gray-800 bg-opacity-80 rounded-lg flex items-center justify-center overflow-hidden"
        >
          <Link href={href} className="text-lg p-4 hover:text-gray-800 hover:bg-[var(--secondary-color)] w-full text-center">
            Shop Now
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
