import supabase from "@/lib/supabaseClient";
import Product from "@/lib/types/productType";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import categories from "@/lib/content/categories";
import Card from "@/components/Card";
import PaddingContainer from "@/components/PaddingContainer";

type Props = {
  params : Promise<{category : string}>
}


export default async function ShopPage({ params } : Props){
  const param = await params;
  const currCategory = param.category;

  const { data }: { data: Product[] | null } = 
  currCategory.toLowerCase() === 'all' ? await supabase.from('products').select()
    : currCategory.toLowerCase() === 'fashion'
      ? await supabase.from('products').select().in('category', ['Clothes', 'Shoes'])
      : await supabase.from('products').select().eq('category', currCategory);

  if(!data) return null;
  
  return (
    <PaddingContainer className="font_crimson max_width">
      <div className="flex justify-center p-12 border-b text-[12px] md:text-lg">
        {categories.map((category, i) => (
          <div key={category.id}>
            <Link 
              href={`/shop/${category.title}`}
              className={
                twMerge("hover:underline",
                  currCategory[0].toUpperCase() + currCategory.slice(1)  ===  category.title && "underline"
                )
              }
            >
              {category.title}
            </Link>

            {i !== categories.length - 1 && (
              <span className="mx-2">|</span>
            )}
          </div>
        ))}
      </div>

      <div className="my-9 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
        {data.map((product) => (
          <Card
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </PaddingContainer>
  )
} 