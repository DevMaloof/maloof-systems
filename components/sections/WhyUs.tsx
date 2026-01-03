// components/sections/WhyUs.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { FloatingText } from '@/components/FloatingText'

export function WhyUs() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

    return (
        <section ref={ref} className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    style={{ rotate, scale }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-emerald-500/10 to-amber-500/10 rounded-3xl blur-3xl" />

                    <div className="relative glass-effect rounded-3xl border border-gray-700 p-12 md:p-16 shadow-glow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-8">
                                <span className="gradient-text-multi">
                                    Why Maloof's Systems
                                </span>
                            </h2>

                            <FloatingText
                                text="Intentional • Focused • Reliable"
                                className="text-2xl text-gray-300 mb-12"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="space-y-8"
                        >
                            <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed text-center font-light">
                                We're intentional about what we build and how we build it.
                            </p>

                            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />

                            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                                Our goal isn't to impress — it's to deliver systems that run quietly,
                                reliably, and effectively. We believe in software that serves its purpose
                                without fanfare, built with care and attention to detail.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {["Precision", "Clarity", "Reliability", "Purpose"].map((value, index) => (
                                <motion.div
                                    key={value}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl mb-4">
                                        {index === 0 && "🎯"}
                                        {index === 1 && "✨"}
                                        {index === 2 && "🛡️"}
                                        {index === 3 && "⚡"}
                                    </div>
                                    <h4 className="font-bold text-white text-lg">{value}</h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm uppercase tracking-widest">
                        Founder-led without ego • Trust-building • No buzzwords
                    </p>
                </motion.div>
            </div>
        </section>
    )
}