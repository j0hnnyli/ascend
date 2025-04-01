import ImageChoiceComponent from "@/components/ImageChoiceComponent";
import supabase from "@/lib/supabaseClient";
import ProductControls from "../ProductControls";
import PaddingContainer from "@/components/PaddingContainer";
import Recommendations from "../Reccomendations";
import Product from "@/lib/types/productType";
import { Suspense } from "react";


type Props = {
  params : Promise<{id : string}>
}

export default async function ProductPage({params } : Props){
  const param = await params;

  const {data} : {data: Product[] | null} = await supabase.from('products').select().eq('id', param.id)

  if(!data) return null;

  const {title, price, description} = data[0];

  return (
    <PaddingContainer className="max_width">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="w-full h-[500px] md:h-[550px]">
          <ImageChoiceComponent
            product={data[0]}
            className="w-full lg:w-[80%] h-full mx-auto"
            imageChoiceSide="right"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font_crimson text-center">{title}</h2>
          <p className="text-xl font_crimson my-5">$ {price}</p>
          <p className="text-left lg:w-[80%]">{description}</p>

          <ProductControls
            product={data[0]}
          />
        </div>
      </div>

      <Suspense fallback={<div className="bg-gray-300 animate-pulse rounded-xl h-[500px] mt-20"></div>}>
        <Recommendations id={data[0].id} category={data[0].category} />
      </Suspense>

    </PaddingContainer>
  )
}