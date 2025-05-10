'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {
  title: string;
  img: string;
  href: string;
};

export default function CategoryCard({ title, img, href }: Props) {

  return (
    <motion.div
      initial={{ scaleX: 0, originX: 'left' }}
      whileInView={{ scaleX: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{once: true, amount: .2}}
    >
       <Link href={href}
       > 
        <div 
          className="group bg-[var(--primary-color)] rounded-xl w-full relative h-[200px] md:h-[300px] overflow-hidden"
        >
          <div className='flex items-center text-4xl absolute top-2 left-2 bg-[var(--primary-color)] '>
            <h2 className=''>{title}</h2>
            <MdOutlineArrowOutward className='group-hover:ml-2 group-hover:mb-2 transition-all duration-300 ease-in-out text-xl mt-2'/>
          </div>
          <div 
            className='absolute w-full h-full bottom-0 md:-bottom-10 -right-20 md:-right-10  lg:-right-20 group-hover:-bottom-5 group-hover:-right-15  transition-all duration-300 ease-in-out'
          >
            <Image 
              src={img}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
