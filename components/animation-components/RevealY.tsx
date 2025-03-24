'use client'

import { ReactNode } from "react"
import { motion } from 'framer-motion'

type Props = {
  children : ReactNode;
  delayTime?: number;
  className?: string;
  once?: boolean;
}


export default function RevealY({children, delayTime = 0, className, once=true} : Props){
  return (
    <motion.div
      initial={{ opacity: 0, y : 20 }}
      whileInView={{ opacity: 1, y : 0}}
      transition={{duration: 0.8, delay: delayTime}}
      viewport={{ once: once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}