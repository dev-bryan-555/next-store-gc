import Products from "@/components/ui/Products";
import Sidebar from "@/components/ui/Sidebar";


export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return (
    <div className='max-w-7xl mx-auto flex p-2.5 flex-wrap'>
      <div className="basis-1/6 p-2 hidden sm:block">
        <Sidebar />
      </div>
      <div className="basis-1/5 flex-grow p-2 bg-gray-100 dark:bg-[#242424b6] rounded-lg overflow-hidden">
        <Products products={data} />
      </div>
    </div>
  );
}
