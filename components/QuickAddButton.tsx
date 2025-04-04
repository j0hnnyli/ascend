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
  const { handleAdd } = useContext(CartContext);

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);


  const handleQuickAdd = async () => {
    setIsLoading(true)

    const isSizeRequired = 
    (product.category === "Shoes" && selectedSize === "") || 
    (product.category === "Clothes" && !product.title.includes("Cap") && selectedSize === "");

    if (isSizeRequired) {
      setIsLoading(false);
      setError("Size is required");
      setTimeout(() => setError(""), 1500);
      return;
    }
    
    await wait(1500);
    setIsLoading(false);
    setSuccess(true);

    handleAdd(product, selectedSize, quantity);

    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  }

  return (
    <Sheet>
      <SheetTrigger className="absolute bottom-3 right-3 bg-[var(--secondary-color)] p-1 rounded-xl cursor-pointer z-30 hover:bg-[var(--primary-color)]">
        <IoIosCart className="text-xl"/>
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
              selectedSize={selectedSize}
              type={product.category}
              show={
                product.category === 'Shoes' || 
                (product.category === 'Clothes' && !product.title.includes('Cap'))
              }
              onChange={(value : string) => setSelectedSize(value)}
              className="w-full"
            />
          </div>

          <div className="w-full">
            <Quantities 
              quantity={quantity}
              onChange={(value: string) => setQuantity(Number(value))}
              className="w-full"
            />
          </div>
        </div>
        
        <QuantityInCart 
          id={product.id} 
          isClothes={
            product.category.toLowerCase() === 'clothes' || 
            product.category.toLowerCase() === 'shoes'
          }
        />

        <button 
          onClick={handleQuickAdd}
          className={twMerge(
              "border mt-5 bg-black text-[var(--primary-color)] cursor-pointer py-2 flex items-center justify-center",
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
                {error ? 'Size is Required' : success ? 'Added To Cart' : 'Add To Cart'}
              </span>
            </h3>
          )}
        </button>

      </SheetContent>
    </Sheet>
  )
}


function QuantityInCart({id, isClothes} : {id : number, isClothes: boolean}){
  const { cart } = useContext(CartContext);

  const productItems = cart.filter((item) => item.id === id);
  const totalQuantity = productItems.reduce((acc, item) => acc + item.quantity, 0);

  if (productItems.length === 0) return null

  return (
    <div>
      <p className="font-semibold">In Cart: {!isClothes ? `${totalQuantity}` : ''} </p>
      {isClothes && (
        <ul className="flex gap-3 overflow-auto">
          {productItems.map((item) => (
            <li key={item.cartItemId} className="text-sm font-medium">
              <span className="font-bold">{item.size}</span>: {item.quantity} 
              {item.quantity === 9 && <span className="text-red-500"> (max)</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}