// components/sections/CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/MagneticButton'

export function CTASection() {
    return (
        <section className="min-h-[80vh] relative flex items-center justify-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 via-gray-950 to-emerald-900/30" />

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px h-32 bg-linear-to-b from-transparent via-gray-700 to-transparent"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        <span className="text-gray-100">
                            Ready to build something
                        </span>
                        <br />
                        <span className="gradient-text-multi">
                            that works?
                        </span>
                    </h2>

                    <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        If you're looking to build or improve a practical web system, we'd be glad to talk.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <MagneticButton>
                        <button className="group px-12 py-6 bg-blue-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow">
                            <span className="relative z-10 text-lg font-semibold flex items-center">
                                Start a Conversation
                                <svg
                                    className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </MagneticButton>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 border-2 border-gray-700 rounded-full hover:border-gray-400 transition-all duration-300"
                    >
                        <span className="text-lg font-semibold text-gray-100">View Case Studies</span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-gray-800/50"
                >
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Maloof's Systems. All systems built with care.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        No selling pressure. Just serious work for serious businesses.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}