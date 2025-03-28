'use client'

import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {
  index: number;
  title: string;
  img: string;
  description: string;
  isOpen: boolean;
  href: string;
  setOpenIndex : () => void;
};

export default function CategoryExpandCard({index, title, img, description, setOpenIndex, isOpen, href }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { x : -100, opacity: 0},
        show: {
          x : 0, 
          opacity : 1,
          transition : { 
            delay: index * 0.2,
            type : "spring",
            ease : "easeOut",
            duration : 0.5,
            x : { duration : 0.1},
            opacity : { duration : 0.5 }
          }
        } 
      }}
      onClick={setOpenIndex}
      className={twMerge(
       `overflow-hidden h-24 lg:h-[400px] w-full bg-[var(--primary-color)] rounded-xl relative z-[${10 + index}px] transition-all ease-in-out duration-500 cursor-pointer`, 
        isOpen && "lg:w-[250%] h-[100%] lg:h-[400px]"
      )}
    >
      <div className='bg-[var(--primary-color)]'>
        <Image
          src={img}
          alt={title}
          width={300}
          height={500}
          className={twMerge(
            `object-cover ml-10 absolute bottom-0 -right-32 lg:-right-10 h-full z-[${10 + index}px] transition-all duration-500`, 
            isOpen && "scale-110 lg:-right-24 -bottom-10"
          )}
        />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="absolute left-4 bottom-0 text-2xl lg:text-4xl lg:-rotate-90 origin-left z-20"
          >
            {title}
          </motion.h2>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height:  '96px' }}
            transition={{ duration: 0.3 }}
            className="w-[60%] h-full p-4 relative z-20 bg-[var(--primary-color)]"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="text-4xl"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="text-sm my-5"
            >
              {description}
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="border"
            >
              <Link href={href} className="py-2 px-4 hover:bg-[var(--secondary-color)]">
                Shop Now
              </Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}