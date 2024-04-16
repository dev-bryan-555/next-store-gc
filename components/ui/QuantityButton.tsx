"use client"

import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantityButton({ qty = 0 }: { qty: number }) {
    const [quantity, setQuantity] = useState(qty)

    const decrement = () => {
        setQuantity((q) => {
            if (q === 1) return 0;

            return q - 1
        })
    }

    const increment = () => {
        setQuantity((q) => q + 1)
    }

    return (
        <div className="flex items-center">
            <button disabled={quantity === 1} onClick={decrement} className="disabled:bg-gray-300 dark:disabled:bg-gray-900 dark:disabled:border-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                <FaMinus size={16}/>
            </button>
            <input className="bg-gray-200 dark:bg-[#212028] p-2 rounded-lg text-sm text-center w-12 mx-1 focus:outline-none" readOnly value={quantity} />
            <button onClick={increment} className="border border-gray-300 focus:outline-none hover:bg-gray-100 rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                <FaPlus size={16}/>
            </button>
        </div>
    )
}
