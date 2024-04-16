'use client'

import { ThemeProvider } from 'next-themes'

export default function Provider({ children }: { children: React.ReactNode}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-bg-[#212028] dark:text-gray-200 bg-gray-200 dark:bg-[#212028] select-none transition-colors duration-200'>
            { children }
        </div>
    </ThemeProvider>
  )
}
