'use client'

import { CartContext } from "@/lib/CartContext"
import Image from "next/image"
import Link from "next/link";
import { useContext, useEffect, useState } from "react"
import { FaRegTrashCan } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";


export default function CartDisplay(){
  const [isMounted, setIsMounted] = useState(false);
  const { cart, setCart, handleRemove } = useContext(CartContext)

  const handleAddQuantity = (id : string) => {
    setCart(() => cart.map((item) => 
      item.cartItemId === id ? 
      {...item, quantity : item.quantity + (item.quantity < 9 ? 1 : 0) } : 
     item 
    )
  )
}

const handleSubQuantity = (id : string) => {
    setCart(() => cart.map((item) => 
      item.cartItemId === id ? 
      {...item, quantity : item.quantity - (item.quantity === 1 ? 0 : 1)} : 
      item 
    )
  )
}

const cartTotal = cart.reduce((total, cur) => total + (cur.price * cur.quantity), 0).toFixed(2)

useEffect(() => {
  setIsMounted(true)
}, [])

  return (
    <>
      {isMounted && cart.length === 0 && (
        <div> 
          <p className="text-lg">You have nothing in your shopping cart.</p>

          <div className="mt-5">
            <Link href="/shop/all" className="py-2 px-4 border border-black hover:bg-[var(--secondary-color)]">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
      
      {isMounted && cart.length > 0  && (
          <div>
            <div>
              {cart.map((cartItem) => (
                <div key={cartItem.cartItemId} className="py-5 border-b border-black flex gap-3 justify-between relative">
                  <div className="w-full md:w-[200px] h-[200px]">
                    <Image
                      src={cartItem.images[0]}
                      alt={cartItem.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-5  w-full md:w-[85%]">
                    <Link href={`/product/${cartItem.id}`} className="md:w-[50%]">
                      <p className="">{cartItem.title} </p>
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between md:w-[50%] h-full">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex justify-between items-center gap-3 ">
                            <button 
                              disabled={cartItem.quantity === 1}
                              onClick={() => handleSubQuantity(cartItem.cartItemId)}
                              className={
                                twMerge("cursor-pointer", 
                                  cartItem.quantity === 1 && "text-gray-300",
                                  cartItem.quantity !== 1 && "hover:text-red-500"
                                )
                              }
                            >
                              -
                            </button>

                            <span>{cartItem.quantity}</span>

                            <button
                              disabled={cartItem.quantity === 9}
                              onClick={() => handleAddQuantity(cartItem.cartItemId)}
                              className={
                                twMerge("cursor-pointer", 
                                  cartItem.quantity === 9 && "text-gray-300",
                                  cartItem.quantity !== 9 && "hover:text-green-500"
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          {cartItem.size && (
                            <div>
                              <p>Size : {cartItem.size}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <p>$ {(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleRemove(cartItem.cartItemId)}
                    className="text-xl text-red-500 hover:text-red-800 absolute bottom-3 right-0 cursor-pointer"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              ))}

              <div className="md:w-[400px] mt-5 py-5 ml-auto">
                <div>
                  <h2 className="flex justify-between text-2xl">
                    <span>Subtotal</span>
                    <span>$ {cartTotal}</span>
                  </h2>

                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}