import ImageChoiceComponent from "@/components/ImageChoiceComponent";
import supabase from "@/lib/supabaseClient";
import ProductControls from "../ProductControls";


type Props = {
  params : {
    [id : string] : string;
  }
}

export default async function ProductPage({params } : Props){
  const param = await params;

  const {data} = await supabase.from('products').select().eq('id', param.id)

  if(!data) return null;
  
  const {title, price, description} = data[0];

  return (
    <div className="max_width p-2 md:py-16 md:px-5 flex flex-col md:flex-row items-center gap-5">
      <div className="w-full h-[300px] md:h-[550px]">
        <ImageChoiceComponent
          product={data[0]}
          className="w-full lg:w-[80%] h-full mx-auto"
          imageChoiceSide="right"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl font_crimson text-center">{title}</h2>
        <p className="text-xl font_crimson my-5">$ {price}</p>
        <p className="text-left">{description}</p>

        <ProductControls
          product={data[0]}
        />
      </div>

    </div>
  )
}