import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ReactQueryClientProvider } from '@/lib/queryClient';
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Created by Tahir",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main className="flex min-h-screen flex-col items-center p-24">
              <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
                <Link href="/"><h2 className="text-2xl font-bold">PokemonApp</h2></Link>
              </div>
              <div className="flex justify-center w-full mt-8">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}