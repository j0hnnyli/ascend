import CategoriesSection from "@/components/CategoriesSection";
import PopularClothes from "@/components/PopularClothes";
import Showcase from "@/components/showcase/Showcase";
import supabase from "@/lib/supabaseClient";
import Image from "next/image";

export default async function Home() {
  const { data } = await supabase.from('populars').select().eq('category', 'Clothes');

  if(!data) return;

  return (
    <div className="max-w-[2000px] mx-auto">
      <Showcase />
      <div className="bg-[var(--secondary-color)] py-20">
        <div className="w-[80%] md:w-[60%] mx-auto text-center">
          <h2>
            We craft modern styles in clothing, shoes, electronics and
            more with blending timeless design, local production, and responsibly
            sourced materials for a better future
          </h2>
          <button className="px-6 py-1 border mt-5">Our Story</button>
        </div>

        <div className="mt-20 w-[85%] mx-auto font_crimson">
          <h2 className="text-center text-4xl mb-5">
            Ascend&apos;s Collections
          </h2>
          <CategoriesSection />
        </div>
      </div>

      <div className="relative border py-20 flex items-center justify-between">
        <Image
          src="/clothing.jpg"
          alt="/cotheing"
          fill
          className="object-cover brightness-[60%]"
        />

        <div 
          className="w-full h-full relative flex flex-col md:flex-row items-center justify-evenly text-[var(--primary-color)] px-4 gap-3"
        >
          <div className="font_crimson md:w-[50%]">
            <h2 className="text-4xl">Effortless Fashion, Timeless style</h2>
            <div className="mt-20">
              <p className="text-lg">
                We craft modern styles in clothing with a focus on timeless design, quality craftsmanship, and sustainable materials—ensuring fashion that looks good, feels good, and does good for the future
              </p>
              <button className="px-6 py-2 border mt-5">
                Shop Now
              </button>
            </div>
          </div>

          <div className="">
            <PopularClothes clothes={data} />
          </div>
        </div>
      </div>

    </div>
  );
}
