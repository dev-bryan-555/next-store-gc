import Ratings from "@/components/ui/Ratings";
import Image from "next/image";
import QuantityButton from '@/components/ui/QuantityButton'

export default async function ProductItem({ params }: { params: { productId: string }}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
  const product = await res.json();

  return (
    <div className='max-w-7xl mx-auto flex p-2.5 flex-wrap'>
      <div className="w-1/3 p-3">
        <div className="w-full aspect-square relative rounded-lg border dark:bg-gray-300 mix-blend-multiply dark:mix-blend-normal">
          <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              sizes="auto" 
              priority 
              className="object-contain rounded-lg aspect-square mix-blend-multiply" 
          />
        </div>
      </div>  
      
      <div className="w-4/6 p-3 mt-3 flex flex-col space-y-3">
        <div className="font-semibold text-2xl truncate">{product.title}</div>
          <div className="font-normal text-md h-auto line-clamp-2">{product.description}</div>
          <div className="font-semibold text-2xl">${(product.price * 0.5).toFixed(2)} <span className="line-through text-lg text-purple-800">${product.price}</span></div>
          <div className="flex items-center">
              <Ratings rating={product.rating.rate} size={'md'} />
              <p className="ms-2 text-sm font-medium text-[#212028] dark:text-gray-300">{product.rating.rate}</p>
              <span className="size-1.5 mx-2 bg-[#212028] rounded-full dark:bg-gray-300"></span>
              <p className="text-sm font-medium text-[#212028] dark:text-gray-300">{product.rating.count} reviews</p>
          </div>
          <QuantityButton qty={1}/>
          <div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Add to cart</button>
          </div>
      </div>
    </div>
  )
}
