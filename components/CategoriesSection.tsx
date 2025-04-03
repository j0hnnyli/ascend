'use client'

import categoriesInfo from '@/lib/content/categoriesInfo';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';


export default function CategoriesSection(){

  return (
    <motion.div 
      variants={{
        hidden: {}, 
        show: {
          opacity: 1,
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.20}}
      className='flex flex-col lg:flex-row gap-5'
    >
      {categoriesInfo.map((category, index) => (
        <CategoryCard
          key={category.id}
          index={index}
          href={category.href}
          title={category.title}
          img={category.img}
          description={category.description}
        />
      ))}
    </motion.div>
  )
}
