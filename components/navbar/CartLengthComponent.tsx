'use client'

import { useCartStore } from "@/lib/store"
import LoadingSkeleton from "../LoadingSkeleton"

export default function CartLengthComponent(){
  const  cart  = useCartStore((state) => state.cart)
  const  isHydrated  = useCartStore((state) => state.isHydrated)

  if(!isHydrated){
    return <LoadingSkeleton className="w-2 h-3 rounded-md"></LoadingSkeleton>
  }

  return (
    <p className="text-sm">{cart.length}</p>    
  )
}