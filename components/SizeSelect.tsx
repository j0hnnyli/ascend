'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { clotheSizes, shoeSizes } from "@/lib/content/sizes"

type Props = {
  type : string;
  show : boolean;
  className?: string;
  onChange : (value: string) => void;
  selectedSize : string;
}

export default function SizeSelect({type, className, show=true, onChange, selectedSize} : Props){

  return (
    <>
      {show && (
        <div>
          <p className="text-sm">Selected Sizes : </p>
          <Select onValueChange={onChange}>
            <SelectTrigger className={className}>
              <SelectValue placeholder={selectedSize === "" ? "Size" : selectedSize} />
            </SelectTrigger>
            <SelectContent>
              {
                type === 'Clothes' && (
                  <>
                    {clotheSizes.map((size) => (
                      <SelectItem value={size} key={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </>
                )
              } 
              { 
                type === 'Shoes' && (
                  <>
                    {shoeSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </>
                )
              }
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  )
}