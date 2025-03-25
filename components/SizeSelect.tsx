'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CartContext } from "@/lib/CartContext";
import { clotheSizes, shoeSizes } from "@/lib/content/sizes"
import { useContext } from "react";

type Props = {
  type : string;
  show : boolean;
  className?: string;
}

export default function SizeSelect({type, className, show=true} : Props){
  const { setSelectedSize } = useContext(CartContext)

  return (
    <>
      {show && (
        <div>
          <p>Selected Sizes : </p>
          <Select onValueChange={(value) => setSelectedSize(value)}>
            <SelectTrigger className={className}>
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              {
                type === 'Clothes' && (
                  <>
                    {clotheSizes.map((size) => (
                      <SelectItem value={size} key={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </>
                )
              } 
              { 
                type === 'Shoes' && (
                  <>
                    {shoeSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </>
                )
              }
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  )
}