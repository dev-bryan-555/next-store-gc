import Link from "next/link";
import { MdFilterList } from "react-icons/md";
import { siteConfig } from "@/config/siteConfig";
import FilterProducts from "./FilterProducts";
import { Suspense } from "react";

export default async function Sidebar() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await res.json();
    
  return (
    <div className="mr-2.5">
        <Suspense>
            {/* category */}
            <div className="border-b border-[#212028] dark:border-gray-300 pb-2.5">
                <Link href={"/products/category"} className="flex space-x-2 items-center font-semibold text-xs lg:text-sm hover:bg-neutral-300 dark:hover:bg-gray-700 rounded-lg p-2">
                    <MdFilterList size={24} />
                    <span>ALL CATEGORIES</span>
                </Link>
                { siteConfig.categoryLinks.map((link) => (
                    <Link key={link.label} href={`/products/category/${link.params}`} className="flex space-x-2 items-center font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-gray-700 rounded-lg p-2">
                        <span>{link.label}</span>
                    </Link>
                ))}
                { categories.map((link: string) => (
                    <Link key={link} href={`/products/category/${link}`} className="capitalize flex space-x-2 items-center font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-gray-700 rounded-lg p-2">
                        <span>{link}</span>
                    </Link>
                ))}
            </div>
            <FilterProducts categories={categories}/>
        </Suspense>
    </div>
  )
}
