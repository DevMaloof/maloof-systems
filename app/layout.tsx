// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Force dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force dark mode
                document.documentElement.classList.add('dark');
                
                // Check if user prefers light mode but we still want dark
                const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
                if (prefersLight.matches) {
                  document.documentElement.classList.add('dark'); // Still use dark
                }
                
                // Store theme preference
                localStorage.setItem('theme', 'dark');
              })();
            `,
          }}
        />

        {/* Add float animation styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px) translateX(0px);
                }
                25% {
                  transform: translateY(-20px) translateX(10px);
                }
                50% {
                  transform: translateY(-10px) translateX(-10px);
                }
                75% {
                  transform: translateY(-30px) translateX(5px);
                }
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-gray-950 text-gray-100 antialiased overflow-x-hidden`}>
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-950 to-black" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 grid-pattern" />

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-linear-to-r from-blue-400/20 to-emerald-400/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}