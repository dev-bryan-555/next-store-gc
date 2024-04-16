import Image from "next/image";
import Ratings from '@/components/ui/Ratings'
import Link from "next/link";

interface Product {
    id: string | number;
    title: string,
    image: string,
    description: string,
    rating: {
        rate: number,
        count: number
    }
    price: number
}

export default function ProductCard({ product } : { product: Product }) {

    return (
        <div className="transition-all duration-200 hover:scale-105 flex-grow w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 rounded-lg p-2 cursor-pointer hover:bg-neutral-300 dark:hover:bg-gray-900">
            <Link href={`/products/${product.id}`}>
                <div className="w-full aspect-square relative rounded-lg dark:bg-gray-300 mix-blend-multiply dark:mix-blend-normal">
                    <Image 
                        src={product.image} 
                        alt={product.title} 
                        fill 
                        sizes="auto" 
                        priority 
                        className="object-contain rounded-lg aspect-square mix-blend-multiply" 
                    />
                </div>

                <div className="mt-3 flex flex-col space-y-1.5 w-full">
                    <div className="font-semibold text-sm truncate">{product.title}</div>
                    <div className="font-normal text-xs h-auto line-clamp-2">{product.description}</div>
                    <div className="font-semibold text-lg">${(product.price * 0.5).toFixed(2)} <span className="line-through text-sm text-purple-800">${product.price}</span></div>
                    <div className="flex items-center">
                        <Ratings rating={product.rating.rate}/>
                        <p className="ms-1 text-xs font-medium text-[#212028] dark:text-gray-300">{product.rating.rate}</p>
                        <span className="size-1 mx-1 bg-[#212028] rounded-full dark:bg-gray-300"></span>
                        <p className="text-xs font-medium text-[#212028] dark:text-gray-300">{product.rating.count} reviews</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
