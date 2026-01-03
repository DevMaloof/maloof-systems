// components/sections/WhatWeDo.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { Card3D } from '@/components/Card3D'

const services = [
    {
        icon: "🧩",
        title: "Reservation Systems",
        description: "Online booking systems designed to handle real-world constraints — time slots, availability, authentication, and admin control. Built to reduce friction for both users and businesses.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: "🛒",
        title: "E-Commerce Systems",
        description: "Reliable e-commerce platforms with clear product flows, persistent carts, secure checkout, and scalable architecture. Designed for maintainability, not shortcuts.",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        icon: "📊",
        title: "Admin Dashboards",
        description: "Internal tools that give teams visibility and control — orders, reservations, data, and workflows — without clutter or unnecessary complexity.",
        gradient: "from-amber-500 to-orange-500"
    },
    {
        icon: "⚙️",
        title: "Custom Systems",
        description: "Tailored systems built around specific business workflows, integrations, and operational needs.",
        gradient: "from-violet-500 to-purple-500"
    }
]

export function WhatWeDo() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section ref={ref} className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text-multi">
                            What We Build
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We focus on systems that support real operations, not demo projects or throwaway apps.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{ y }}
                        >
                            <Card3D>
                                <div className="h-full p-8 glass-effect rounded-3xl shadow-glow hover:shadow-glow-emerald transition-shadow duration-300">
                                    <div className="text-5xl mb-6">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                    <div className={`mt-6 w-12 h-1 rounded-full bg-linear-to-r ${service.gradient}`} />
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-blue-900/30 to-emerald-900/30 border border-gray-700">
                        <span className="text-gray-200 font-medium">
                            Each system is crafted with precision and purpose
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}