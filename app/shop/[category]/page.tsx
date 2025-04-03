import supabase from "@/lib/supabaseClient";
import Product from "@/lib/types/productType";
import Card from "@/components/Card";

type Props = {
  params: Promise<{ category: string }>;
}

export default async function ShopPage({ params } : Props){
  const param = await params;
  const currCategory = param.category;

  const { data }: { data: Product[] | null } = 
  currCategory === 'All' ? await supabase.from('products').select()
    : currCategory === 'Fashion'
      ? await supabase.from('products').select().in('category', ['Clothes', 'Shoes'])
      : await supabase.from('products').select().eq('category', currCategory);

  if(!data) return null;
  
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