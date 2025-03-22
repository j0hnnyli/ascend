import Image from "next/image";
import Link from "next/link";


export default function Footer(){
  return (
    <footer className="bg-[var(--primary-color)] py-10 px-4">
      <div className=" max-w-[2000px] mx-auto">
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
            <div >
              <Link href='/' className="block underline hover:underline-offset-0">Shop</Link>
              <Link href='/' className="block underline hover:underline-offset-0">About</Link>
              <Link href='/' className="block underline hover:underline-offset-0">Contact</Link>
            </div>

            <div>
              <Link href='/' className="block underline hover:underline-offset-0">Instagram</Link>
              <Link href='/' className="block underline hover:underline-offset-0">Facebook</Link>
              <Link href='/' className="block underline hover:underline-offset-0">Twitter/X</Link>
            </div>
            
            <Link href='/' className="block underline hover:underline-offset-0">Shipping & Returns</Link>
          </div>
        </div>
        <p className="font_crimson my-5">
          Created &copy; {new Date().getFullYear()} Ascend - All rights reserved
        </p>
      </div>
    </footer>
  )
}