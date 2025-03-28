'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  className ?: string;
  quantity: number;
  onChange : (value: string) => void;
}

export default function Quantities({className, onChange, quantity} : Props){

  return (
    <div>
      <p className="text-sm">Quantities : </p>
      <Select onValueChange={onChange}>
        <SelectTrigger className={className}>
          <SelectValue placeholder={quantity} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 9 }, (_, i) => i + 1).map((quan) => (
            <SelectItem key={quan} value={String(quan)}>
              {quan}
            </SelectItem>
          ))}        
        </SelectContent>
      </Select>
    </div>
  )
}