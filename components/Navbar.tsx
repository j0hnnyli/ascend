import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import { IoIosCart } from "react-icons/io";
import Link from "next/link";
import NavbarWrapper from "./NavbarWrapper";

const links = [
  { name : 'Shop', href : '/shop/all'}, 
  { name :'About', href: '/about'}, 
  {name : 'Contact', href: '/contact'}
]

export default function Navbar(){
  return (
    <NavbarWrapper className="flex items-center justify-center bg-[var(--primary-color)] h-28 fixed top-0 w-full z-50">
      <nav className="w-full max_width flex justify-between items-center py-2 px-5">
        <div className="flex items-center gap-2 text-lg">
          <FaInstagram className="cursor-pointer"/>
          <FaFacebookF className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className="text-2xl font_crimson tracking-widest cursor-pointer">Ascend</Link>
          <div className="flex items-center mt-5 gap-3"> 
            {links.map((link) => (
              <div key={link.name} className="flex text-sm">
                <div>
                  <Link href={link.href}>{link.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 text-xl">
          <IoIosCart className="cursor-pointer"/>
          <p className="text-sm">1</p>
        </div>
      </nav>
    </NavbarWrapper>
  )
}