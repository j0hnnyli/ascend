import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


export default function ContactPage(){
  return (
    <div className="p-2 md:py-16 md:px-5 flex flex-col md:flex-row">
      <div className="w-full">
        <h2 className="text-4xl font_crimson tracking-widest">Contact</h2>
      </div>

      <div className="w-full mt-10 md:mt-0">
        <h4 className="font_crimson text-xl">For all customer and sales inquiries, please contact:</h4>
        
        <div className="mt-5">
          <h4 className="font_crimson text-xl">Customer Service</h4>
          <p className="underline">customerservice@ascend.com</p>
        </div>
        
        <div className="mt-5">
          <h4 className="font_crimson text-xl">Wholesale Inquiries</h4>
          <p className="underline">wholesaleinquiries@ascend.com</p>
        </div>
       
        <div className="mt-5">
          <h4 className="font_crimson text-xl">Press Inquiries</h4>
          <p className="underline">pressinquiries@ascend.com</p>
        </div>

        <p className="my-10 font_crimson text-xl">Follow Us!</p>

        <div className="flex gap-5">
          <FaInstagram className="text-lg cursor-pointer hover:text-[var(--third-color)]"/>
          <FaFacebookF className="text-lg cursor-pointer hover:text-[var(--third-color)]"/>
          <FaXTwitter className="text-lg cursor-pointer hover:text-[var(--third-color)]"/>
        </div>
      </div>
    </div>
  )
}