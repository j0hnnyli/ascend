'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoIosCart } from "react-icons/io";
import Product from "@/lib/types/productType";
import ImageChoiceComponent from "./ImageChoiceComponent";
import SizeSelect from "./SizeSelect";
import Quantities from "./Quantities";
import { useContext, useState } from "react";
import { CartContext } from "@/lib/CartContext";
import { wait } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading } from "react-icons/ai";

type Props = {
  product : Product;
}

export default function QuickAddButton({ product } : Props){
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleAdd, selectedSize } = useContext(CartContext);

  const handleQuickAdd = async () => {
    setIsLoading(true)

    if
      (product.category === 'Shoes' || 
      (product.category === 'Clothes' && !product.title.includes('Cap')) && selectedSize === ''
    ){
      setIsLoading(false)
      setError('Sizes is Required')
      setTimeout(() => {setError('')}, 1500)
      return;
    }
    
    await wait(1500)
    setIsLoading(false)

    setSuccess(true);
    setTimeout(() => {setSuccess(false)}, 1500)
    handleAdd(product)
  }

  return (
    <Sheet>
      <SheetTrigger className="absolute bottom-3 right-3 bg-[var(--secondary-color)] p-1 rounded-xl cursor-pointer z-30">
        Quick Shop
      </SheetTrigger>

      <SheetContent className="bg-[var(--primary-color)] border-none p-5 overflow-auto">
        <div className="mt-10">            
          <SheetDescription>
            Quick Shop
          </SheetDescription>

          <SheetTitle className="text-xl mt-5 font_crimson">
            {product.title}
          </SheetTitle>
        </div>

        <div className="w-full h-[400px] ">
          <ImageChoiceComponent 
            product={product}
            className="w-full h-full"
          />
        </div>

        <div className="border-t border-black pt-5">
          <h3>
            Price : <span className="ml-5">$ {product.price}</span>
          </h3>
        </div>

        <div className="flex gap-5 items-center">
          <div className="w-full">
            <SizeSelect
              type={product.category}
              show={
                product.category === 'Shoes' || 
                (product.category === 'Clothes' && !product.title.includes('Cap'))
              }
              className="w-full"
            />
          </div>
          <div className="w-full">
          <p>Quantities : </p>
            <Quantities 
              className="w-full"
            />
          </div>
        </div>

        <button 
          onClick={handleQuickAdd}
          className={twMerge(
              "rounded-2xl border mt-5 bg-black text-[var(--primary-color)] cursor-pointer py-2 flex items-center justify-center",
              error.length > 0 && 'bg-red-500',
              success && 'bg-green-500'
            )
          }
        >
          {isLoading ? (<AiOutlineLoading className="text-xl animate-spin"/>) : (
            <h3 className="flex items-center justify-center gap-3">
              <span>
                <IoIosCart className="text-xl"/>
              </span>
              <span>
                {error.length > 0 && 'Size is Required'}
                {success && 'Added To Cart' }
                {(error.length < 1 && success === false) && 'Add To Cart'}
              </span>
            </h3>
          )}
        </button>

      </SheetContent>
    </Sheet>
  )
}