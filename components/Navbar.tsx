import { CiInstagram, CiFacebook } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import Link from "next/link";


const links = ['Shop', 'About', 'Contact']

export default function Navbar(){
  return (
    <div className="flex items-center justify-center bg-[var(--primary-color)] h-32 fixed top-0 w-full z-50">
      <nav className="w-full max-w-[2000px] flex justify-between items-center py-2 px-4">
        <div className="flex items-center gap-2 text-xl">
          <CiInstagram className="cursor-pointer"/>
          <CiFacebook className="cursor-pointer" />
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font_crimson tracking-widest">Ascend</h2>
          <div className="flex items-center mt-5 gap-3"> 
            {links.map((link) => (
              <div key={link} className="flex text-sm">
                <div>
                  <Link href="/">{link}</Link>
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
    </div>
  )
}