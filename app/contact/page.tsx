import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import RevealOpacity from "@/components/animation-components/RevealOpacity";
import RevealY from "@/components/animation-components/RevealY";

export default function ContactPage(){
  return (
    <div className="p-2 md:py-16 md:px-5 flex flex-col md:flex-row">
      <div className="w-full">
        <RevealOpacity 
          delayTime={0.09}
          text="Contact" 
          className="text-4xl font_crimson tracking-widest" 
        />
      </div>

      <div className="w-full mt-10 md:mt-0">
        <RevealOpacity
          text="For all customer and sales inquiries, please contact:"
          delayTime={0.01} 
          className="font_crimson text-xl"
        /> 
        
        <RevealY delayTime={0.4} className="mt-5">
          <h4 className="font_crimson text-xl">Customer Service</h4>
          <p className="underline">customerservice@ascend.com</p>
        </RevealY>
        
        <RevealY delayTime={0.6} className="mt-5">
          <h4 className="font_crimson text-xl">Wholesale Inquiries</h4>
          <p className="underline">wholesaleinquiries@ascend.com</p>
        </RevealY>
       
        <RevealY delayTime={0.8} className="mt-5">
          <h4 className="font_crimson text-xl">Press Inquiries</h4>
          <p className="underline">pressinquiries@ascend.com</p>
        </RevealY>

        <RevealY delayTime={1} className="my-10 font_crimson text-xl">Follow Us!</RevealY>

        <RevealY delayTime={1.2} className="flex gap-5">
          <FaInstagram className="text-lg cursor-pointer hover:text-[var(--third-color)]"/>
          <FaFacebookF className="text-lg cursor-pointer hover:text-[var(--third-color)]"/>
          <FaXTwitter className="text-lg cursor-pointer hover:text-[var(--third-color)]"/>
        </RevealY>
      </div>
    </div>
  )
}