import CartDisplay from "./CartDisplay";

export default function CartPage(){
  return (
    <div className="p-2 md:py-16 md:px-5">
      <h1 className="font_crimson text-4xl">Shopping Cart</h1>
      
      <div className="mt-5">
        <CartDisplay />
      </div>
    </div>
  )
}