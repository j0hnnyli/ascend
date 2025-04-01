import QuickAddButton from "@/components/QuickAddButton";
import supabase from "@/lib/supabaseClient"
import Product from "@/lib/types/productType";
import { wait } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


type Props = {
  id: number;
  category : string;
}

export default async function Recommendations({ category, id } : Props){
  await wait(3000)
  const {data} : {data: Product[] | null} = await supabase.from('products').select().eq('category', category)

  if(!data) return null;

  const filter = data.filter((product) => product.id !== id)

  return (
    <div>
      <div className="flex items-center gap-10 mt-20">
        <Image 
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className=""
        />

        <h2 className="font_crimson tracking-widest text-2xl md:text-4xl">
          Recommendations 
        </h2>
      </div>

      <div className="w-full flex gap-5 overflow-auto mt-5">
        {filter.map((product) => (
          <div 
            key={product.id}
            className="relative flex-shrink-0 w-[250px]" 
          >
            <Link href={`/product/${product.id}`} className="absolute h-full w-full z-20"></Link>
            <div 
              className="h-[400px] relative"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={400}
                className="w-full h-full object-cover brightness-90"
              />
              <QuickAddButton product={product}/>
            </div>
      
            <div className="text-center w-full">
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}