'use client'

import Link from "next/link"

export default function MenuItem({ label, params, btnClass }: { label: string, params: string, btnClass?: string }) {
  return (
    <Link className={`${btnClass && btnClass}`} href={`/products/category/${params}`}>{label}</Link>
  )
}
