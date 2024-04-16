import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/siteConfig";
import Header from "@/components/ui/Header";
import Provider from "@/app/providers";
import Announcement from "@/components/ui/Announcement";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    absolute: `${siteConfig.title}`,
    default: `${siteConfig.title}`,
  },  
  description: `${siteConfig.description}`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Provider>
          <Announcement />
          <Header />
          { children }
        </Provider>
      </body>
    </html>
  );
}
