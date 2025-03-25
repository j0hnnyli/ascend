'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import Product from "@/lib/types/productType";
import QuickAddButton from "./QuickAddButton";
import Link from "next/link";

type Props = {
  product : Product;
}

export default function Card({ product } : Props ){

  return ( 
    <motion.div 
      initial={{y:20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.7, ease: "easeIn"}}
      viewport={{once : true, amount : 0.2}}
      className="relative" 
    >
      <Link href={`/product/${product.id}`} className="absolute h-full w-full z-20"></Link>
      <div 
        className="h-[250px] md:h-[525px] flex transition-all ease-in-out duration-500 relative overflow-hidden"
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

      <div className="text-center">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </motion.div>
  )
}


