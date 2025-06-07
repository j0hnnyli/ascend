import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";


type Props = {
  title: string;
  img: string;
  href: string;
};


export default function CategoryCard({ title, img, href }: Props) {

  return (
    <div>
       <Link href={href}
       > 
        <div 
          className="group bg-[var(--primary-color)] rounded-xl w-full relative  overflow-hidden h-[150px] md:h-[200px]  lg:h-[150px]"
        >
          <div className='flex items-center text-3xl lg:text-4xl p-1 bg-[var(--primary-color)]'>
            <h2 className=''>{title}</h2>
            <MdOutlineArrowOutward className='group-hover:ml-2 group-hover:mb-2 transition-all duration-300 ease-in-out text-xl mt-2'/>
          </div>
          <div 
            className='absolute w-[200px] h-[200px] -bottom-1/3 right-0 group-hover:right-5  transition-all duration-300 ease-in-out'
          >
            <Image 
              src={img}
              alt={title}
              fill
              className=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
