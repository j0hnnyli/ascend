'use client'

import { createContext, ReactNode, useState, useEffect, SetStateAction, Dispatch } from "react"
import Product from "./types/productType";

type CartItem = { 
  size: string;
  quantity : number;
  cartItemId : string;
} & Product

type ContextProps = {
  cart: CartItem[];
  setCart : Dispatch<SetStateAction<CartItem[]>>;
  handleAdd: (product: Product, size: string, quantity: number) => void;
  handleRemove: (cartItemId: string) => void; 
};

export const CartContext = createContext<ContextProps>({
  cart: [],
  setCart : () => {},
  handleAdd: () => {},
  handleRemove: () => {},
});


export function CartContextProvider({ children } : {children : ReactNode}){
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined"){
      const storageCart = localStorage.getItem("ascendcart");
      return storageCart ? JSON.parse(storageCart) : [];
    }; 
    
    return [];
  });
  
  const handleAdd = (product : Product, size : string, quantity: number) => {
    const cartItemId = `${product.id}-${size}`

    setCart((prevCart) => {
      const findItem = prevCart.find((item) => item.cartItemId === cartItemId);
  
      if (findItem) {
        return prevCart.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity < 9 ? (item.quantity + quantity > 9 ? 9 : item.quantity + quantity) : 9 }
            : item
        );
      }
  
      return [
        ...prevCart,
        {
          ...product,
          size: size,
          quantity: quantity,
          cartItemId: cartItemId,
        },
      ];
    });
  }

  const handleRemove = (cartItemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  useEffect(() => {
    localStorage.setItem('ascendcart', JSON.stringify(cart))
  } , [cart])

  const value = {
    cart, handleAdd, handleRemove, setCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}