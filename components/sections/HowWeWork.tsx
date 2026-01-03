// components/sections/HowWeWork.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

const principles = [
    {
        title: "Engineering First",
        description: "We prioritize structure, performance, and maintainability from the start. Every decision is made with long-term use in mind.",
        color: "text-blue-400",
        bg: "bg-blue-900/20",
        border: "border-blue-700"
    },
    {
        title: "Business-Aware Thinking",
        description: "We think beyond features. We design systems around how businesses actually operate.",
        color: "text-emerald-400",
        bg: "bg-emerald-900/20",
        border: "border-emerald-700"
    },
    {
        title: "Small Team, Direct Communication",
        description: "You work directly with the people building your system. No layers. No noise.",
        color: "text-amber-400",
        bg: "bg-amber-900/20",
        border: "border-amber-700"
    }
]

export function HowWeWork() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return (
        <section ref={ref} className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text-multi">
                            How We Work
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our approach is built on principles that ensure quality and reliability
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{ x: index === 1 ? x : undefined }}
                            whileHover={{ scale: 1.05 }}
                            className="group"
                        >
                            <div className={`h-full p-8 rounded-3xl border ${principle.border} ${principle.bg} transition-all duration-300 group-hover:shadow-glow`}>
                                <div className="flex items-center mb-6">
                                    <div className={`w-3 h-12 rounded-full ${principle.bg} mr-4`} />
                                    <h3 className={`text-2xl font-bold ${principle.color}`}>
                                        {principle.title}
                                    </h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {principle.description}
                                </p>
                                <div className="mt-8 pt-6 border-t border-gray-700/50">
                                    <div className="flex items-center text-gray-400">
                                        <span className="text-sm font-medium">Learn more</span>
                                        <motion.svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center px-6 py-4 rounded-full glass-effect border border-gray-700 shadow-glow">
                        <div className="w-3 h-3 rounded-full bg-emerald-400 mr-3 animate-pulse" />
                        <span className="text-gray-200 font-medium">
                            Direct collaboration • Clear communication • Tangible results
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}