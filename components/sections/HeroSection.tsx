// components/sections/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import { TypewriterText } from '@/components/TypewriterText'
import { FloatingElements } from '@/components/FloatingElements'

export function HeroSection() {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4">
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/10 to-emerald-900/20" />

            <FloatingElements />

            <div className="relative z-20 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-block px-4 py-2 rounded-full glass-effect border border-gray-700 mb-8">
                        <span className="text-sm font-semibold text-gray-300">Maloof's Systems</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                >
                    <span className="block gradient-text-multi">
                        We build practical
                    </span>
                    <span className="block mt-2">
                        <TypewriterText
                            texts={["web systems", "digital solutions", "business tools"]}
                            className="gradient-text-multi"
                        />
                    </span>
                    <span className="block text-gray-100 mt-2">
                        for real businesses.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Maloof's Systems is a small, focused team designing reservation platforms,
                    e-commerce systems, and internal dashboards — built for clarity, reliability,
                    and long-term use.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-sm text-gray-400 italic mb-12"
                >
                    No hype. No unnecessary complexity. Just systems that work.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105">
                        <span className="relative z-10 font-semibold">View Our Work</span>
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button className="group px-8 py-4 border-2 border-gray-700 rounded-full hover:border-gray-400 transition-all duration-300 hover:scale-105">
                        <span className="font-semibold text-gray-100 group-hover:text-gray-300">
                            Get in Touch
                        </span>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-32"
                >
                    <div className="animate-bounce w-6 h-10 border-2 border-gray-700 rounded-full mx-auto flex justify-center">
                        <div className="w-1 h-3 bg-gray-500 rounded-full mt-2" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}