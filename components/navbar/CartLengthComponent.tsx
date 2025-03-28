'use client'

import { CartContext } from "@/lib/CartContext"
import { useContext, useEffect, useState } from "react"

export default function CartLengthComponent(){
  const [isMounted, setIsMounted] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted && (
        <p className="text-sm">{cart.length}</p>    
      )}
    </>
  )
}