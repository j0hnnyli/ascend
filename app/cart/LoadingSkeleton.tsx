import LoadingSkeleton from "@/components/LoadingSkeleton"

export default function LoadingDisplayScreen(){
  return (
    <div>
      <LoadingSkeleton className="h-[200px] my-5"/>
      <LoadingSkeleton className="h-[200px] my-5"/>
    </div>
  )
}