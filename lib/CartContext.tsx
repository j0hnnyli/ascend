'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import Product from "./types/productType";


type CartItem = { 
  size: string;
  quantity : number;
  cartItemId : string;
} & Product

type ContextProps = {
  cart: CartItem[];
  selectedSize: string;
  setSelectedSize: Dispatch<SetStateAction<string>>; 
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;  
  handleAdd: (product: Product) => void;
  handleRemove: (id: number) => void;
};


export const CartContext = createContext<ContextProps>({
  cart: [],
  selectedSize: "",
  quantity: 1,
  setSelectedSize: () => {},
  setQuantity: () => {},
  handleAdd: () => {},
  handleRemove: () => {},
});


export function CartContextProvider({ children } : {children : ReactNode}){
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const handleAdd = (product : Product) => {
    const cartItemId = `${product.id}-${selectedSize}`

    setCart((prevCart) => {
      const findItem = prevCart.find((item) => item.cartItemId === cartItemId);
  
      if (findItem) {
        return prevCart.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity < 9 ? item.quantity + 1 : 9 }
            : item
        );
      }
  
      return [
        ...prevCart,
        {
          ...product,
          size: selectedSize,
          quantity: quantity,
          cartItemId: cartItemId,
        },
      ];
    });
  }

  const handleRemove = (id : number) => {
    const filtered = cart.filter((item) => item.id !== id)
    setCart(filtered)
  }

  const value = {
    cart, selectedSize, quantity, 
    handleAdd, handleRemove,
    setSelectedSize, setQuantity
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}