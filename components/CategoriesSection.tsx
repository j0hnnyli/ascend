'use client'

import { useState } from 'react'
import categoriesInfo from '@/lib/content/categoriesInfo';
import { motion } from 'framer-motion';
import CategoryExpandCard from './CategoryExpandCard';


export default function CategoriesSection(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div 
      variants={{
        hidden: {},
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.3, delayChildren: 0.1 }, 
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className='flex flex-col lg:flex-row gap-5 justify-between'
    >
      {categoriesInfo.map((category, index) => (
        <CategoryExpandCard
          key={category.id}
          index={index}
          href={category.href}
          title={category.title}
          img={category.img}
          description={category.description}
          isOpen={openIndex === index}
          setOpenIndex={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </motion.div>
  )
}
