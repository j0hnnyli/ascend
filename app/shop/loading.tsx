import LoadingSkeleton from "@/components/LoadingSkeleton"

const length = new Array(4).fill(0)

export default function Loading(){
  return (
    <div className="my-9 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {length.map((_, i) => (
        <LoadingSkeleton 
          key={i}
          className="h-[275px] md:h-[550px]" 
        />
      ))}
    </div>
  )
}