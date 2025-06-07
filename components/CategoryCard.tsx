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
          className="group bg-[var(--primary-color)] rounded-xl w-full relative  overflow-hidden h-[150px]"
        >
          <div className='flex items-center text-4xl p-1'>
            <h2 className=''>{title}</h2>
            <MdOutlineArrowOutward className='group-hover:ml-2 group-hover:mb-2 transition-all duration-300 ease-in-out text-xl mt-2'/>
          </div>
          <div 
            className='absolute w-[200px] h-[200px] bottom-0 md:-bottom-1/2 -right-10 md:-right-10  lg:-right-20 group-hover:-bottom-1/4 group-hover:-right-2  transition-all duration-300 ease-in-out'
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
