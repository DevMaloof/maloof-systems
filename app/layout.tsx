// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Maloof's Systems | Practical Web Systems for Real Businesses",
  description: "We build reservation platforms, e-commerce systems, and internal dashboards — built for clarity, reliability, and long-term use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen`}>
        {/* Simple gradient background */}
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-gray-900 via-gray-950 to-black" />

        {/* Simple Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 border-gray-800 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-md ">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  {/* Gradient border */}
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-emerald-500 rounded-full blur-sm" />

                  {/* Image container */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-900">
                    <img
                      src="/Logo.png"
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold text-white ml-4 group-hover:text-blue-400 transition-colors">
                  Maloof's Systems
                </span>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-50 font-extrabold hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/team" className="text-gray-50 font-extrabold hover:text-white transition-colors">
                  Team
                </Link>
                <Link href="/contact" className="text-gray-50 font-extrabold hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}