import { FaExclamationTriangle } from "react-icons/fa";

export default function CategoryNotFound(){
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
      <p className="text-lg text-gray-600 mb-4">
        Oops! The category you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  )
}