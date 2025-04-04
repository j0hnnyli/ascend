'use client'

import { FaExclamationTriangle } from 'react-icons/fa';
import Link from "next/link"

export default function NotFound(){
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
      <p className="text-lg text-gray-600 mb-4">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-lg underline hover:underline-offset-0">
        Back to Home
      </Link>
    </div>
  )
}