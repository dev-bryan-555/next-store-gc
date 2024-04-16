'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdSunny, MdDarkMode, MdSettings } from 'react-icons/md'

export default function ToggleTheme() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme
    
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return <MdSettings className='animate-spin' size={24} />; // Fallback UI while component is loading
    }

    return (
        <>
            {
                currentTheme === 'dark' ? (
                    <MdSunny className='cursor-pointer' size={24} onClick={() => setTheme('light')} />
                ) : (
                    <MdDarkMode className='cursor-pointer' size={24} onClick={() => setTheme('dark')} />
                )
            }
        </>
    )
}
