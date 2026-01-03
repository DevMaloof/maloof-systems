// app/contact/page.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FloatingOrbs } from '@/components/FloatingOrbs'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { MagneticButton } from '@/components/MagneticButton'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const [copied, setCopied] = useState(false)

    const contactMethods = [
        {
            icon: "📧",
            title: "Email",
            value: "hello@maloofsystems.com",
            description: "For direct inquiries and project discussions",
            action: () => {
                window.location.href = "mailto:hello@maloofsystems.com"
            }
        },
        {
            icon: "💬",
            title: "Signal / Telegram",
            value: "@maloofsystems",
            description: "For secure and quick conversations",
            action: () => {
                navigator.clipboard.writeText("@maloofsystems")
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            }
        },
        {
            icon: "📱",
            title: "Call / WhatsApp",
            value: "+1 (555) 123-4567",
            description: "For voice conversations when needed",
            action: () => {
                window.location.href = "tel:+15551234567"
            }
        }
    ]

    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />
            <FloatingOrbs />

            {/* Subtle gradient overlay */}
            <div className="fixed inset-0 bg-linear-to-br from-blue-900/20 via-gray-950 to-emerald-900/20 pointer-events-none" />

            <motion.div
                style={{ opacity }}
                className="relative z-10"
            >
                {/* Hero Section */}
                <section className="min-h-[70vh] relative flex items-center justify-center px-4 pt-20">
                    <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-gray-950 to-transparent" />

                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="inline-block px-4 py-2 rounded-full glass-effect border border-gray-700 mb-8">
                                <span className="text-sm font-semibold text-gray-300">Contact</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                        >
                            <span className="block gradient-text-multi">
                                Get in Touch
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            Simple, direct communication. No forms, no gatekeepers.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-8"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-gray-700">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                                <span className="text-sm text-gray-300">Direct responses within 24 hours</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Methods */}
                <section className="py-20 px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="relative group"
                                >
                                    <button
                                        onClick={method.action}
                                        className="w-full h-full text-left"
                                    >
                                        <div className="h-full p-8 glass-effect rounded-3xl border border-gray-700 shadow-glow hover:shadow-glow-emerald transition-all duration-300 group-hover:border-gray-500">
                                            <div className="flex items-start mb-6">
                                                <div className="text-5xl mr-4">{method.icon}</div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                                                    <p className="text-gray-400 text-sm">{method.description}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-700/50">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg font-semibold text-gray-200">{method.value}</span>
                                                    <motion.div
                                                        className="text-gray-500 group-hover:text-gray-300"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 400 }}
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </motion.div>
                                                </div>
                                            </div>

                                            {/* Hover gradient effect */}
                                            <div className="absolute inset-0 bg-linear-to-r from-blue-900/0 via-gray-900/0 to-emerald-900/0 group-hover:from-blue-900/20 group-hover:via-gray-900/10 group-hover:to-emerald-900/20 rounded-3xl transition-all duration-300" />
                                        </div>
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Copied notification */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={copied ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                            className="fixed bottom-8 right-8 z-50"
                        >
                            <div className="px-6 py-4 glass-effect rounded-xl border border-gray-700 shadow-glow">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 mr-3 animate-pulse" />
                                    <span className="font-medium text-white">Copied to clipboard!</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🎯</div>
                                    <h4 className="font-bold text-white mb-2">Direct Response</h4>
                                    <p className="text-gray-400 text-sm">You'll hear back from us directly</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl mb-4">⚡</div>
                                    <h4 className="font-bold text-white mb-2">24-Hour Response</h4>
                                    <p className="text-gray-400 text-sm">Typically faster, but we guarantee within a day</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl mb-4">🤝</div>
                                    <h4 className="font-bold text-white mb-2">No Middlemen</h4>
                                    <p className="text-gray-400 text-sm">Direct access to the team building your system</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-20 mb-20"
                        >
                            <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />
                        </motion.div>

                        {/* Next Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="gradient-text-multi">
                                    What to Include
                                </span>
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Help us help you faster by mentioning:
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                            {[
                                {
                                    title: "Project Type",
                                    items: ["Reservation system", "E-commerce", "Dashboard", "Custom"],
                                    color: "bg-blue-900/20 border-blue-700"
                                },
                                {
                                    title: "Timeline",
                                    items: ["Urgent (2-4 weeks)", "Standard (1-3 months)", "Flexible", "Just exploring"],
                                    color: "bg-emerald-900/20 border-emerald-700"
                                },
                                {
                                    title: "Budget Range",
                                    items: ["$5k - $15k", "$15k - $50k", "$50k+", "To be discussed"],
                                    color: "bg-amber-900/20 border-amber-700"
                                },
                                {
                                    title: "Current Status",
                                    items: ["New project", "Existing system", "Redesign", "Adding features"],
                                    color: "bg-violet-900/20 border-violet-700"
                                }
                            ].map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative"
                                >
                                    <div className={`p-6 rounded-2xl border ${category.color} backdrop-blur-sm`}>
                                        <h4 className="font-bold text-white mb-4">{category.title}</h4>
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={item} className="flex items-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3" />
                                                    <span className="text-gray-300 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Final CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-block max-w-2xl p-12 glass-effect rounded-3xl border border-gray-700 shadow-glow">
                                <div className="text-6xl mb-6">📞</div>
                                <h3 className="text-3xl font-bold text-white mb-4">Ready to Talk?</h3>
                                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                                    Pick your preferred method above and reach out. We're listening.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <MagneticButton>
                                        <button
                                            onClick={() => window.location.href = "mailto:hello@maloofsystems.com"}
                                            className="group px-8 py-4 bg-blue-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow"
                                        >
                                            <span className="relative z-10 font-semibold">Send an Email</span>
                                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </button>
                                    </MagneticButton>

                                    <Link href="/">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 border-2 border-gray-700 rounded-full hover:border-gray-400 transition-all duration-300"
                                        >
                                            <span className="font-semibold text-gray-100">Back to Home</span>
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-32 pt-8 border-t border-gray-800/50"
                        >
                            <div className="text-center">
                                <p className="text-gray-400 text-sm">
                                    © {new Date().getFullYear()} Maloof's Systems
                                </p>
                                <p className="text-gray-500 text-xs mt-2">
                                    Direct communication. Real results.
                                </p>

                                {/* Navigation */}
                                <div className="flex flex-wrap justify-center gap-6 mt-8">
                                    <Link href="/" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                                        Home
                                    </Link>
                                    <Link href="/team" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                                        Team
                                    </Link>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-gray-300 text-sm">Contact</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </motion.div>

            {/* Floating particles */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-linear-to-r from-blue-400/30 to-emerald-400/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}