import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Loading(){
  return (
    <div className="h-screen -mt-16 md:-mt-28 pt-18 md:pt-32 p-5"> 
      <LoadingSkeleton className="w-full h-full" />
    </div>
  )
}