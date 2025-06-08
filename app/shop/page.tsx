import supabase from "@/lib/supabaseClient";
import Product from "@/lib/types/productType";
import Card from "@/components/Card";
import CategoryNotFound from "./CategoryNotFound";

export default async function AllProductsPage(){
  const { data }: { data: Product[] | null } = await supabase.from('products').select()

  if(!data?.length) return <CategoryNotFound />;
  
  return (
    <div className="my-9 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((product) => (
        <Card
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
} 
