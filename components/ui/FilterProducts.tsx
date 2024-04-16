"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import Ratings from '@/components/ui/Ratings';

export default function FilterProducts({ categories = ['string'] }: { categories: string[] }) {
    const searchParams = useSearchParams();
    const ratings = searchParams.get('ratings');
    const searchProducts = searchParams.get('searchProducts');

    let searchQueryProducts = '';
    let searchQueryPrevValues: string[] = [];

    if (searchProducts !== null) {
        searchQueryProducts += `&searchProducts=${searchProducts}`;
        searchQueryPrevValues = searchProducts.split(',') || [];
    }

    return (
        <>
            {/* SEARCH FILTER */}
            <div className="mt-5 border-b border-[#212028] dark:border-gray-300 pb-2">
                <div className="flex space-x-2 items-center font-semibold text-xs lg:text-sm p-2">
                    <span>SEARCH FILTER</span>
                </div>
                { ["Men", "Gold", "Women", "SSD"].map((link: string) => {
                    const newSearchQueryPrevProducts = searchQueryPrevValues.filter(prev => prev !== link && prev); // Remove empty strings and the current link
                    const queryStringRatings = (ratings !== null) ? `ratings=${ratings}` : '';

                    const baseQueryString = `/?${queryStringRatings}`;

                    const removeSearchQuery = newSearchQueryPrevProducts.length === 0 ? baseQueryString : `/?searchProducts=${newSearchQueryPrevProducts.join(',')}&${queryStringRatings}`;

                    const addSearchQuery = `/?searchProducts=${[...newSearchQueryPrevProducts, link].join(',')}&${queryStringRatings}`;

                    return (
                        <Link
                            href={searchQueryPrevValues.includes(link) ? removeSearchQuery : addSearchQuery}
                            key={link}
                            className="flex space-x-2 items-center font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-gray-700 rounded-lg p-2">
                            <input
                                checked={searchQueryPrevValues.includes(link)}
                                readOnly
                                id={link}
                                type="checkbox"
                                className="cursor-pointer appearance-none size-4 bg-transparent border rounded border-gray-300 outline outline-1 checked:bg-[#202128]" />
                            <label htmlFor={link} className="cursor-pointer capitalize flex-grow ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{link}</label>
                        </Link>
                    )
                })}
            </div>

            {/* RATINGS*/}
            <div className="mt-5 border-b border-[#212028] dark:border-gray-300 pb-2">
                <div className="flex space-x-2 items-center font-semibold text-xs lg:text-sm p-2">
                    <span>RATINGS</span>
                </div>
                { [5, 4, 3, 2, 1].map((rate, index) => (
                    <Link href={`/?ratings=${rate}${searchQueryProducts}`} key={index} className="cursor-pointer flex space-x-2 items-center font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-gray-700 rounded-lg p-2">
                        <Ratings rating={rate}/>
                        { rate !== 5 && <span className="text-xs tracking-wide">& UP</span>}
                        
                    </Link>
                ))
                }
            </div>
        </>
    )
}
