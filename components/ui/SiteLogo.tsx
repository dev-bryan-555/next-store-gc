'use client'

import Link from "next/link"

export default function SiteLogo() {
  return (
    <Link href='/' className="flex items-center">
        <span className="text-md font-bold text-purple-800">Next</span>
        <span className="text-md font-bold">Store</span>
    </Link>
  )
}
