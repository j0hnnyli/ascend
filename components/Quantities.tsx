'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { CartContext } from "@/lib/CartContext";
import { useContext } from "react";


type Props = {
  className ?: string;
}


export default function Quantities({className} : Props){
  const { quantity, setQuantity } = useContext(CartContext)

  return (
    <Select onValueChange={(value) => setQuantity(Number(value))}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={quantity} />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((quan) => (
          <SelectItem key={quan} value={String(quan)}>
            {quan}
          </SelectItem>
        ))}        
      </SelectContent>
    </Select>
  )
}