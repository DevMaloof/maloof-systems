// app/contact/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
    const [copied, setCopied] = useState(false)

    const contactMethods = [
        {
            icon: "📧",
            title: "Email",
            value: "maloofsystems@gmail.com",
            description: "For direct inquiries and project discussions",
            action: () => {
                window.location.href = "mailto:maloofsystems@gmail.com"
            }
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            title: "LinkedIn",
            value: "linkedin.com/company/maloof-systems",
            description: "Connect professionally and see our work",
            action: () => {
                window.open("https://linkedin.com/company/maloof-systems", "_blank")
            }
        },
        {
            icon: "📱",
            title: "Call / WhatsApp",
            value: "+92 (0325) 930-5766",
            description: "For voice conversations when needed",
            action: () => {
                window.location.href = "tel:+9203259305766"
            }
        }
    ]

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="block gradient-text">Get in Touch</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Simple, direct communication. No forms, no gatekeepers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-8"
                    >
                        <div className="inline-flex items-center px-4 py-2 glass rounded-full">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                            <span className="text-sm text-gray-300">Direct responses within 24 hours</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass rounded-2xl p-8 hover-lift cursor-pointer"
                                onClick={method.action}
                            >
                                <div className="flex items-start mb-6">
                                    <div className="text-4xl mr-4">{method.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                                        <p className="text-gray-400 text-sm">{method.description}</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold text-gray-200">{method.value}</span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Copied Notification */}
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed bottom-8 right-8 z-50"
                        >
                            <div className="glass rounded-xl p-4 shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 mr-3 animate-pulse" />
                                    <span className="font-medium text-white">Copied to clipboard!</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl mb-4">🎯</div>
                                <h4 className="font-bold text-white mb-2">Direct Response</h4>
                                <p className="text-gray-400 text-sm">You'll hear back from us directly</p>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl mb-4">⚡</div>
                                <h4 className="font-bold text-white mb-2">24-Hour Response</h4>
                                <p className="text-gray-400 text-sm">Typically faster, guaranteed within a day</p>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl mb-4">🤝</div>
                                <h4 className="font-bold text-white mb-2">No Middlemen</h4>
                                <p className="text-gray-400 text-sm">Direct access to the team</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* What to Include */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="gradient-text">What to Include</span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Help us help you faster by mentioning:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Project Type",
                                    items: ["Customer booking & scheduling systems", "Commerce & transaction platforms", "Operational dashboards & admin tools", "Custom business systems"]
                                },
                                {
                                    title: "Timeline",
                                    items: ["Urgent (2-4 weeks)", "Standard (1-3 months)", "Flexible", "Exploring"]
                                },
                                {
                                    title: "Budget Range",
                                    items: ["$1k - $5k", "$5k - $10k", "$10k+", "To discuss"]
                                },
                                {
                                    title: "Current Status",
                                    items: ["New project", "Existing system", "Redesign", "Adding features"]
                                }
                            ].map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-xl p-6"
                                >
                                    <h4 className="font-bold text-white mb-4">{category.title}</h4>
                                    <ul className="space-y-2">
                                        {category.items.map((item, i) => (
                                            <li key={item} className="flex items-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3" />
                                                <span className="text-gray-300 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="glass rounded-3xl p-12 max-w-2xl mx-auto">
                            <div className="text-5xl mb-6">📞</div>
                            <h3 className="text-3xl font-bold text-white mb-4">Ready to Talk?</h3>
                            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                                Pick your preferred method above and reach out. We're listening.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => window.location.href = "mailto:hello@maloofsystems.com"}
                                    className="btn-primary"
                                >
                                    Send an Email
                                </button>
                                <Link href="/" className="btn-outline">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-gray-400 font-light tracking-wide">
                                "Your processes, perfected. Your potential, unleashed."
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} Maloof's Systems. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}