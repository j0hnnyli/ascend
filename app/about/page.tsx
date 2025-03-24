import Image from "next/image";
import ApproachHoverImg from "./ApproachHoverImg";
import RevealOpacity from "@/components/animation-components/RevealOpacity";
import RevealY from "@/components/animation-components/RevealY"


export default function About(){
  return (
    <div className="text-white p-2 md:py-16 md:px-5 max_width"> 
      <div className="flex flex-col md:flex-row justify-between gap-5 ">
        <div className="w-full flex flex-col justify-between mt-10 md:mt-0">
          <RevealOpacity 
            delayTime={0.04}
            text="Crafted For a Sustainable Future" 
            className="font_crimson text-4xl"
          />

          <div className="pr-4 mt-10">
            <RevealY 
              delayTime={0.6}
            >
              Founded by Johnny in 2025, Ascend was built on a vision of blending modern style with timeless craftsmanship. With a deep commitment to sustainability, we create thoughtfully designed products that balances contemporary aesthetics with responsible production.
            </RevealY>

            <RevealY 
              delayTime={0.7} 
              className="mt-10"
            >
              Each collection features effortlessly refined pieces crafted from high-quality, ethically sourced materials—ensuring durability, comfort, and style that lasts. Every garment is made with care, embracing local production and sustainable practices to shape a better future in fashion.
            </RevealY>
          </div>
        </div>

        <RevealY 
          delayTime={0.5}
          className="h-[300px] md:h-[600px] w-full"
        >
          <Image
            src="/timelessfashion.jpg"
            alt="timeless-fashion"
            width={300}
            height={500}
            className="w-full h-full object-cover"
          />
        </RevealY>
      </div>

      <div className="mt-20">
        <RevealOpacity 
          delayTime={0.04}
          text="Our Appraoch"
          className="text-4xl font_crimson text-center font_crimson"
        />
        <div className="mt-10 flex flex-row flex-wrap gap-5 justify-center text-center">
          <ApproachHoverImg
            img='/sustainable.jpg'
            title='Sustainable'
            description="Our materials are responsibly sourced, and we prioritize ethical, local production to minimize waste and reduce our carbon footprint."
          />

          <ApproachHoverImg
            img='/clock.jpg'
            title='Timeless Yet Modern'
            description=" We create pieces that balance innovation with classic design, ensuring they remain relevant and stylish for years to come."
          />
        </div>
      </div>
    </div>
  )
}