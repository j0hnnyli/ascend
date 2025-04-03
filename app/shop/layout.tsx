import PaddingContainer from "@/components/PaddingContainer";
import categories from "@/lib/content/categories";
import { ReactNode } from "react";
import FilterLinks from "./FilterLinks";


export default function Layout({children } : {children : ReactNode}){

  return (
    <PaddingContainer className="font_crimson max_width">
      <div className="flex justify-center py-9 border-b text-[12px] md:text-lg ">
        {categories.map((category, i) => (
          <div key={category.id}>
            <FilterLinks 
              title={category.title}
            />

            {i !== categories.length - 1 && (
              <span className="mx-2">|</span>
            )}
          </div>
        ))}
      </div>

      <div>
        {children}
      </div>
    </PaddingContainer>
  )  
}