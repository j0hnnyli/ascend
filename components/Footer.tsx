import Image from "next/image";
import Link from "next/link";
import navLinks from "@/lib/content/navLink";


export default function Footer(){
  return (
    <footer className="bg-[var(--primary-color)] py-10 px-5">
      <div className="max_width">
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center gap-10">
            <Image 
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className=""
            />
            <h2 className="text-2xl font_crimson tracking-widest">
              Ascend
            </h2>
          </div>

          <div className="flex justify-evenly gap-10 text-sm mt-5 md:mt-0">
            <div>
              {navLinks.map(({name, href}) => (
                <Link 
                  key={name} 
                  href={href} 
                  className="block underline hover:underline-offset-0"
                >
                  {name}
                </Link>
              ))}
            </div>

            <div>
              <div className="block underline hover:underline-offset-0 cursor-pointer">Instagram</div>
              <div className="block underline hover:underline-offset-0 cursor-pointer">Facebook</div>
              <div className="block underline hover:underline-offset-0 cursor-pointer">Twitter/X</div>
            </div>
            
            <div>
              <Link href='/shipping' className="block underline hover:underline-offset-0">Shipping & Returns</Link>
            </div>
          </div>
        </div>
        <p className="font_crimson my-5">
          Created &copy; {new Date().getFullYear()} Ascend - All rights reserved
        </p>
      </div>
    </footer>
  )
}