import CartDisplay from "./CartDisplay";
import PaddingContainer from "@/components/PaddingContainer";

export default function CartPage(){
  return (
    <PaddingContainer className="max_width">
      <h1 className="font_crimson text-4xl">Shopping Cart</h1>
      
      <div className="mt-5">
        <CartDisplay />
      </div>
    </PaddingContainer>
  )
}