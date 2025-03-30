import RevealY from "@/components/animation-components/RevealY"
import PaddingContainer from "@/components/PaddingContainer"


export default function ShippingAndReturnPage(){
  return (
    <PaddingContainer className="max_width flex flex-col justify-center items-center">
      <RevealY once={false} className="font_crimson text-4xl tracking-widest">Shipping</RevealY>

      <RevealY once={false} className="mt-10 flex flex-col justify-center items-center w-[90%] md:w-[50%]">
        <h4 className="font-bold font_crimson">US Domestic Shipping</h4>
        <p className="text-center mt-3">
          We offer fast, reliable shipping across the U.S. 🚚💨 Orders over $75 ship free! Orders under have a flat $10 shipping fee. For everything else, rates vary by carrier.
        </p>
      </RevealY>
      
      <RevealY once={false} className="mt-10 flex flex-col justify-center items-center w-[90%] md:w-[50%]">
        <h4 className="font-bold font_crimson">International shipping</h4>
        <p className="text-center mt-3">
          We ship worldwide! Orders over $100 ship free. Orders under have a flat $20 shipping fee. All other rates vary by destination and carrier.
        </p>
      </RevealY>

      <RevealY className="w-full">
        <div className="w-[90%] md:w-[40%] h-[1px] bg-black rounded-4xl my-16 mx-auto"></div>
      </RevealY>

      <RevealY once={false} className="font_crimson text-4xl tracking-widest">Returns</RevealY>

      <RevealY once={false} className="mt-10 flex flex-col justify-center items-center w-[90%] md:w-[50%]">
        <h4 className="font-bold font_crimson">Return Cost</h4>
        <p className="text-center mt-3">
          Customers are responsible for return shipping costs unless the item is defective or incorrect. We recommend using a trackable shipping service to ensure your return reaches us safely.
        </p>
      </RevealY>
      
      <RevealY once={false} className="mt-10 flex flex-col justify-center items-center w-[90%] md:w-[50%]">
        <h4 className="font-bold font_crimson">30 Days to Return</h4>
        <p className="text-center mt-3">
          We accept returns within 30 days of delivery. Items must be unused, in original packaging, and in resellable condition. Refunds will be issued to the original payment method.
        </p>
      </RevealY>
      
      <RevealY once={false} className="mt-10 flex flex-col justify-center items-center w-[90%] md:w-[50%]">
        <h4 className="font-bold font_crimson">Returns and Exchanges</h4>
        <p className="text-center mt-3">
          Need a different size or changed your mind? No problem! We offer exchanges or store credit for eligible returns. Contact us to start the process, and we&apos;ll help you every step of the way.
        </p>
      </RevealY>
    </PaddingContainer>
  )
}