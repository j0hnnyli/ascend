'use client'

import { motion } from "framer-motion";

type Props = {
  text : string;
  className?: string;
  delayTime : number;
  once?: boolean;
}

export default function RevealOpacity({ text, className, delayTime, once=true} : Props){
  return (
    <div className={className}>
      {text.split("").map((char, i) => (
        <motion.span 
          key={i} 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.4, delay: i * delayTime}}
          viewport={{ once: once }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}