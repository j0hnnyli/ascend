import { twMerge } from "tailwind-merge";
import { Skeleton } from "./ui/skeleton";

export default function LoadingSkeleton({className} : {className?: string}){
  return <Skeleton className={twMerge("border bg-gray-200", className)}/>  
}