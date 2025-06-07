'use client'

import { motion } from 'framer-motion';
import categoriesInfo from '@/lib/content/categoriesInfo';
import CategoryCard from './CategoryCard';

export default function CategoriesSection() {
  const firstRow = categoriesInfo.slice(0, 3);
  const secondRow = categoriesInfo.slice(3);

  const middleFirst = Math.floor(firstRow.length / 2);
  const middleSecond = Math.floor(secondRow.length / 2);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {firstRow.map((category, index) => {
          const distance = Math.abs(index - middleFirst);
          const delay = distance * 0.2;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay, type : "spring" }}
              viewport={{ once: true, amount: 0.2}}
            >
              <CategoryCard
                href={category.href}
                title={category.title}
                img={category.img}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {secondRow.map((category, index) => {
          const distance = Math.abs(index - middleSecond);
          const delay = distance * 0.2;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay,  type : "spring" }}
              viewport={{ once: true, amount: 0.2}}
            >
              <CategoryCard
                href={category.href}
                title={category.title}
                img={category.img}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
