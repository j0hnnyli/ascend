import CartDisplay from "./CartDisplay";
import PaddingContainer from "@/components/PaddingContainer";

export default function CartPage(){
  return (
    <PaddingContainer className="max_width">
      <CartDisplay />
    </PaddingContainer>
  )
}