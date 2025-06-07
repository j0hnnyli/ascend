import supabase from "@/lib/supabaseClient"
import Product from "@/lib/types/productType";
import ReccomendedDisplayContainer from "./ReccomendedDisplayContainer";

type Props = {
  id: number;
  category : string;
}

export default async function Recommendations({ category, id } : Props){
  const {data} : {data: Product[] | null} = await supabase.from('products').select().eq('category', category)

  if(!data) return null;

  const filter = data.filter((product) => product.id !== id)

  return (
      <ReccomendedDisplayContainer reccomendeds={filter}/>
  )
}