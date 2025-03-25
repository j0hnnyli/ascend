'use client'

import { CartContext } from "@/lib/CartContext"
import { useContext } from "react"

export default function CartLengthComponent(){
  const {cart} = useContext(CartContext);

  return (
    <p className="text-sm">{cart.length}</p>    
  )
}