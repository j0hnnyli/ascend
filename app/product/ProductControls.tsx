'use client'

import Quantities from "@/components/Quantities";
import SizeSelect from "@/components/SizeSelect";
import Product from "@/lib/types/productType";
import { wait } from "@/lib/utils";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { useCartStore } from "@/lib/store";

type Props = {
  product : Product;
}

export default function ProductControls({product} : Props){
  const handleAdd  = useCartStore((state) => state.addItem);
  
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
        setSelectedSize("");
        setQuantity(1); 
      }, 1500);
    }
  

  return (
    <div className="flex flex-col my-5 gap-5 w-full lg:w-[80%]">
      <div className="flex gap-5 items-center w-full ">
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

      <button 
        onClick={handleQuickAdd}
        className={twMerge(
            "border mt-5 bg-black text-[var(--primary-color)] cursor-pointer py-2 flex items-center justify-center w-full",
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
    </div>
  ) 
}