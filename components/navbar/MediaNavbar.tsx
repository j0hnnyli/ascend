'use client'

import Link from "next/link";
import { IoIosCart } from "react-icons/io";
import NavbarWrapper from "./NavbarWrapper";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import navLinks from "@/lib/content/navLink";
import CartLengthComponent from "./CartLengthComponent";

const aboutPath = '/about';

export default function MediaNavbar(){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <NavbarWrapper className="bg-[var(--primary-color)] flex justify-between items-center md:hidden fixed top-0 w-full h-16 z-50">
        <nav className="w-full flex justify-between items-center px-2 h-full">
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className={twMerge("transition-all ease-in-out duration-500",isOpen && "rotate-360")}
          >
            <div 
              className={
                twMerge("h-[1px] bg-black w-6 transition-all ease-in-out duration-500", 
                  isOpen && 'rotate-45',
                  pathname === aboutPath && "bg-white",
                )
              }
            ></div>
            <div 
              className={
                twMerge("h-[1px] bg-black w-6 mt-2 transition-all ease-in-out duration-500", 
                  isOpen && '-rotate-45 mt-0',
                  pathname === aboutPath && "bg-white",
                )
              }
            ></div>
          </div>

          <div>
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font_crimson tracking-widest cursor-pointer"
            >
              Ascend
            </Link>
          </div>

          <div>
            <Link href="/cart" className="flex items-center gap-1 text-xl hover:scale-105 ml-auto">
              <IoIosCart className="cursor-pointer"/>
              <CartLengthComponent />
            </Link>
          </div>
        </nav>
      </NavbarWrapper>

      <AnimatePresence>
        {isOpen && (
            <motion.div 
              variants={{
                hidden : {y : 50, opacity : 0},
                show : {
                  y : 0, 
                  opacity : 1,
                  transition : {staggerChildren : 0.5, delayChildren: 0.1, duration : 0.4, ease : "easeInOut" }
                },
                exit : {y : 50, opacity : 0, transition: { duration: 0.3 }}
              }}
              initial='hidden'
              animate='show'
              exit='exit'
              className={twMerge(
                  "fixed h-full w-full top-16 bg-[var(--primary-color)] z-40 ",
                  pathname === aboutPath && "bg-[var(--third-color)] text-white",
                )
              }
            >
              <div className="flex flex-col justify-center items-center mt-28 font_crimson text-xl">
                {navLinks.map((link, index) => (
                  <motion.div
                    variants={{
                      hidden: { y : 100, opacity: 0},
                      show: {
                        y : 0, 
                        opacity : 1,
                        transition : { 
                          delay: index * 0.3,
                          ease : "easeOut",
                          duration : 0.5,
                        }
                      }
                    }}
                    key={link.name}                   
                    className="mb-5"
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={twMerge("p-1", 
                          pathname === link.href && "border-b border-black", 
                          pathname === aboutPath && "border-white"
                        )
                      }
                    >
                      {link.name}
                    </Link>
                  </motion.div>

                ))}
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}