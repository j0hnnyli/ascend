import supabase from "@/lib/supabaseClient";
import Product from "@/lib/types/productType";
import Card from "@/components/Card";
import { FaExclamationTriangle } from 'react-icons/fa';


type Props = {
  params: Promise<{ category: string }>;
}

export default async function ShopPage({ params } : Props){
  const param = await params;
  const currCategory = param.category

  const { data }: { data: Product[] | null } = 
  currCategory === 'All' ? await supabase.from('products').select()
    : currCategory === 'Fashion'
      ? await supabase.from('products').select().in('category', ['Clothes', 'Shoes'])
      : await supabase.from('products').select().eq('category', currCategory);

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



function CategoryNotFound(){
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
      <p className="text-lg text-gray-600 mb-4">
        Oops! The category you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  )
}