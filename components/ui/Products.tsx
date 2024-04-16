
"use client"

import ProductCard from "@/components/ui/ProductCard";
import { useSearchParams } from "next/navigation";

export default function Products({ products }: { products: any[] }) {
    const searchParams = useSearchParams();
    const isRatings = searchParams.has('ratings');
    const rating = searchParams.get('ratings');
    const getProductsSearch = searchParams.get('searchProducts');
    const searchProducts = getProductsSearch !== null && getProductsSearch.split(',') || null;


    const filteredProducts = isRatings
    ? products.filter(product => 
        product.rating.rate >= parseFloat(rating || '') &&
        (!searchProducts || searchProducts.some(searchTerm => product.title.includes(searchTerm)))
    )
    : products.filter(product => 
        !searchProducts || searchProducts.some(searchTerm => product.title.includes(searchTerm))
    );

    return (
        <div>
            {filteredProducts.length === 0 ? (
                <p>No products match the selected rating criteria. Please try adjusting your filters.</p>
            ) : (
                <div className="flex flex-wrap gap-3">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
