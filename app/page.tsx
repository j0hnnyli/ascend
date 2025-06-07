import CategoriesSection from "@/components/CategoriesSection";
import PopularClothes from "@/components/PopularClothes";
import Showcase from "@/components/showcase/Showcase";
import supabase from "@/lib/supabaseClient";
import Product from "@/lib/types/productType";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {

  return (
    <div >
      <Showcase />
      <div className="bg-[var(--secondary-color)] py-20">
        <div className="max_width">
          <div className="w-[80%] md:w-[60%] mx-auto text-center">
            <h2 className="mb-5">
              We craft modern styles in clothing, shoes, electronics and
              more with blending timeless design, local production, and responsibly
              sourced materials for a better future
            </h2>
            <Link href='/about' className="px-6 py-1 border hover:bg-[var(--primary-color)] border-black font_crimson">Our Story</Link>
          </div>

          <div className="mt-20 px-5 mx-auto font_crimson">
            <h2 className="text-center text-4xl mb-5">
              Ascend&apos;s Collections
            </h2>
            <CategoriesSection />
          </div>
        </div>
      </div>

      <div className="relative py-20 flex items-center justify-between">
        <Image
          src="/clothing.jpg"
          alt="/cotheing"
          fill
          priority
          className="object-cover brightness-[60%]"
        />

        <div 
          className="w-full h-full relative flex flex-col md:flex-row items-center justify-between text-[var(--primary-color)] px-4 gap-3 max_width mx-auto"
        >
          <div className="font_crimson md:w-[50%]">
            <h2 className="text-4xl">Effortless Fashion, Timeless style</h2>
            <div className="mt-20">
              <p className="text-lg">
                We craft modern styles in clothing with a focus on timeless design, quality craftsmanship, and sustainable materials—ensuring fashion that looks good, feels good, and does good for the future
              </p>
              <div className="mt-5">
                <Link href="/shop/Fashion" className="px-6 py-2 border hover:bg-[var(--primary-color)] hover:text-black">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <Suspense fallback={<div className="bg-gray-500 animate-pulse w-[313px] h-[450px]"></div>}>
            <PopularClothesSection />
          </Suspense>
        </div>
      </div>

    </div>
  );
}


async function PopularClothesSection(){
  const { data } : {data : Product[] | null} = await supabase.from('populars').select().in('category', ['Clothes', 'Shoes']);

  if(!data?.length) return null;

  return <div><PopularClothes clothes={data} /></div>
}