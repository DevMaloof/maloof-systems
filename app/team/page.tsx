// app/team/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TeamPage() {
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
                        <span className="block gradient-text">The Team</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        A small, focused unit built around clear ownership, direct collaboration, and practical execution.
                    </motion.p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="gradient-text">Founder & Lead Engineer</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8"
                        >
                            <div className="flex items-center mb-8">
                                <div className="relative mr-6">
                                    {/* Outer glow */}
                                    <div className="absolute -inset-2 bg-linear-to-r from-blue-500/30 to-emerald-500/30 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />

                                    {/* Main avatar */}
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700 bg-linear-to-r from-blue-500/10 to-emerald-500/10">
                                        {/* Your image */}
                                        <img
                                            src="/Founder.webp"
                                            alt="Maloof - Founder"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-emerald-500/10" />

                                        {/* Border highlight */}
                                        <div className="absolute inset-0 rounded-full border border-white/10" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Maloof</h3>
                                    <div className="flex items-center mt-2">
                                        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium">
                                            Founder · Lead Engineer
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Leads system architecture, backend design, and overall technical direction.
                                Focused on building reliable, maintainable web systems with an emphasis on
                                clarity, performance, and long-term use.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                                    <span className="text-gray-300">System architecture & design</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
                                    <span className="text-gray-300">Technical direction & standards</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                                    <span className="text-gray-300">Long-term maintainability focus</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="glass rounded-2xl p-6 hover-lift">
                                <div className="text-3xl mb-4">🎯</div>
                                <h4 className="text-xl font-bold text-white mb-3">Authority Through Responsibility</h4>
                                <p className="text-gray-300">
                                    Leadership comes from ownership and delivery, not credentials or buzzwords.
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6 hover-lift">
                                <div className="text-3xl mb-4">⚡</div>
                                <h4 className="text-xl font-bold text-white mb-3">Practical Execution</h4>
                                <p className="text-gray-300">
                                    Every decision is measured by its impact on system reliability and long-term value.
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6 hover-lift">
                                <div className="text-3xl mb-4">🛡️</div>
                                <h4 className="text-xl font-bold text-white mb-3">Quality First</h4>
                                <p className="text-gray-300">
                                    Maintainability, clarity, and performance are non-negotiable standards.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="gradient-text">Sales & Marketing Partners</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Selective collaboration based on alignment and trust
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                title: "Client Outreach",
                                description: "Responsible for communication and positioning",
                                icon: "📞"
                            },
                            {
                                title: "Needs Alignment",
                                description: "Ensuring solutions match real business requirements",
                                icon: "🎯"
                            },
                            {
                                title: "Trust-Based",
                                description: "Partners selected for shared standards and values",
                                icon: "🤝"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8 hover-lift"
                            >
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
                            <p className="text-gray-200 text-lg italic mb-4">
                                "Partners are brought in based on alignment, trust, and shared standards — not headcount."
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-sm">
                                    Selective
                                </span>
                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                                    Quality-focused
                                </span>
                                <span className="px-3 py-1 bg-amber-900/30 text-amber-300 rounded-full text-sm">
                                    Intentional growth
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8"
                        >
                            <h3 className="text-3xl font-bold mb-8">
                                <span className="gradient-text">How We Collaborate</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold mr-4">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2">Tight Unit, Clear Roles</h4>
                                        <p className="text-gray-300">Everyone knows their responsibilities and authority.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold mr-4">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2">Direct Communication</h4>
                                        <p className="text-gray-300">No layers, no bureaucracy. Short feedback loops.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-400 font-bold mr-4">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2">Clear Accountability</h4>
                                        <p className="text-gray-300">Intentional decisions, transparent progress.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-3xl p-8"
                        >
                            <h3 className="text-3xl font-bold mb-8">
                                <span className="gradient-text">What We Don't Do</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 font-bold mr-4">
                                        ✗
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2">We don't overpromise</h4>
                                        <p className="text-gray-300">Realistic timelines, achievable goals.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 font-bold mr-4">
                                        ✗
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2">We don't ship unnecessary complexity</h4>
                                        <p className="text-gray-300">Clean, maintainable, purposeful solutions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 font-bold mr-4">
                                        ✗
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2">We don't hide behind process or titles</h4>
                                        <p className="text-gray-300">Direct communication, clear ownership.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-gray-100">Work With A Team</span>
                            <span className="block gradient-text">That Knows Its Purpose</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Clear roles, direct communication, and focused execution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Start a Conversation
                            </Link>
                            <Link href="/" className="btn-outline">
                                Back to Home
                            </Link>
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
                                "Your operations, automated. Your growth, accelerated."
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