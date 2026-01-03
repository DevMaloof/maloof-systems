// app/team/page.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FloatingOrbs } from '@/components/FloatingOrbs'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { Card3D } from '@/components/Card3D'
import { MagneticButton } from '@/components/MagneticButton'
import Link from 'next/link'

export default function TeamPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />
            <FloatingOrbs />

            <motion.div
                style={{ opacity }}
                className="relative z-10"
            >
                {/* Hero Section */}
                <section className="min-h-[90vh] relative flex items-center justify-center px-4 pt-20">
                    <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-gray-950 to-transparent" />

                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="inline-block px-4 py-2 rounded-full glass-effect border border-gray-700 mb-8">
                                <span className="text-sm font-semibold text-gray-300">Maloof's Systems</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                        >
                            <span className="block gradient-text-multi">
                                The Team
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Maloof's Systems is a small, focused unit built around clear ownership,
                            direct collaboration, and practical execution.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto italic"
                        >
                            Each role exists to support one goal: building systems that work in the real world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-16"
                        >
                            <div className="animate-bounce w-6 h-10 border-2 border-gray-700 rounded-full mx-auto flex justify-center">
                                <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="gradient-text-multi">
                                    Founder & Lead Engineer
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Clear ownership, direct responsibility
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -inset-8 bg-linear-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
                                <div className="relative glass-effect rounded-3xl border border-gray-700 p-12 shadow-glow">
                                    <div className="flex items-center mb-8">
                                        <div className="w-20 h-20 rounded-full bg-linear-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white text-3xl font-bold mr-6">
                                            M
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white">Maloof</h3>
                                            <div className="flex items-center mt-2">
                                                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium">
                                                    Founder · Lead Engineer
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                        Leads system architecture, backend design, and overall technical direction.
                                        Focused on building reliable, maintainable web systems with an emphasis on
                                        clarity, performance, and long-term use.
                                    </p>

                                    <div className="space-y-4">
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
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8"
                            >
                                <Card3D>
                                    <div className="p-8 glass-effect rounded-2xl border border-gray-700 shadow-glow">
                                        <div className="text-4xl mb-4">🎯</div>
                                        <h4 className="text-xl font-bold text-white mb-3">Authority Through Responsibility</h4>
                                        <p className="text-gray-300">
                                            Leadership comes from ownership and delivery, not credentials or buzzwords.
                                        </p>
                                    </div>
                                </Card3D>

                                <Card3D>
                                    <div className="p-8 glass-effect rounded-2xl border border-gray-700 shadow-glow">
                                        <div className="text-4xl mb-4">⚡</div>
                                        <h4 className="text-xl font-bold text-white mb-3">Practical Execution</h4>
                                        <p className="text-gray-300">
                                            Every decision is measured by its impact on system reliability and long-term value.
                                        </p>
                                    </div>
                                </Card3D>

                                <Card3D>
                                    <div className="p-8 glass-effect rounded-2xl border border-gray-700 shadow-glow">
                                        <div className="text-4xl mb-4">🛡️</div>
                                        <h4 className="text-xl font-bold text-white mb-3">Quality First</h4>
                                        <p className="text-gray-300">
                                            Maintainability, clarity, and performance are non-negotiable standards.
                                        </p>
                                    </div>
                                </Card3D>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-32 px-4 relative overflow-hidden bg-linear-to-b from-gray-950 to-gray-900/50">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="gradient-text-multi">
                                    Sales & Marketing Partners
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Selective collaboration based on alignment and trust
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    title: "Client Outreach",
                                    description: "Responsible for communication and positioning",
                                    icon: "📞",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                {
                                    title: "Needs Alignment",
                                    description: "Ensuring solutions match real business requirements",
                                    icon: "🎯",
                                    color: "from-emerald-500 to-green-500"
                                },
                                {
                                    title: "Trust-Based",
                                    description: "Partners selected for shared standards and values",
                                    icon: "🤝",
                                    color: "from-violet-500 to-purple-500"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card3D>
                                        <div className="h-full p-8 glass-effect rounded-3xl border border-gray-700 shadow-glow">
                                            <div className="text-5xl mb-6">{item.icon}</div>
                                            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                            <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                                            <div className={`w-12 h-1 rounded-full bg-linear-to-r ${item.color}`} />
                                        </div>
                                    </Card3D>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <div className="inline-block px-8 py-6 glass-effect rounded-2xl border border-gray-700 shadow-glow">
                                <p className="text-gray-200 text-lg italic">
                                    "Partners are brought in based on alignment, trust, and shared standards — not headcount."
                                </p>
                                <div className="mt-4 flex items-center justify-center">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                                        <span className="text-sm text-gray-400">Selective</span>
                                    </div>
                                    <div className="mx-4 w-px h-4 bg-gray-700" />
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                                        <span className="text-sm text-gray-400">Quality-focused</span>
                                    </div>
                                    <div className="mx-4 w-px h-4 bg-gray-700" />
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mr-2" />
                                        <span className="text-sm text-gray-400">Intentional growth</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Tools & Process */}
                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="gradient-text-multi">
                                    Tools & Process
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Modern tools, human judgment at the center
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-white">
                                        AI-Assisted Workflows
                                    </h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        We use modern development tools and AI-assisted workflows to improve speed,
                                        consistency, and quality — while keeping human judgment at the center of every decision.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Speed", value: "Improved", color: "text-blue-400" },
                                        { label: "Consistency", value: "Enhanced", color: "text-emerald-400" },
                                        { label: "Quality", value: "Maintained", color: "text-amber-400" },
                                        { label: "Judgment", value: "Human-led", color: "text-purple-400" }
                                    ].map((item) => (
                                        <div key={item.label} className="p-4 glass-effect rounded-xl border border-gray-700">
                                            <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                                            <div className="text-sm text-gray-400">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -inset-8 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
                                <div className="relative glass-effect rounded-3xl border border-gray-700 p-12 shadow-glow">
                                    <div className="text-center">
                                        <div className="text-6xl mb-6">🤖</div>
                                        <h4 className="text-2xl font-bold text-white mb-4">AI as Support</h4>
                                        <p className="text-gray-300">
                                            Framed as support, not replacement. Not a "team member". Not hype.
                                        </p>

                                        <div className="mt-8 pt-8 border-t border-gray-700/50">
                                            <div className="flex items-center justify-center space-x-6">
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-blue-400">+</div>
                                                    <div className="text-sm text-gray-400">Efficiency</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-emerald-400">=</div>
                                                    <div className="text-sm text-gray-400">Better Results</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-amber-400">×</div>
                                                    <div className="text-sm text-gray-400">Human Oversight</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Collaboration & What We Don't Do */}
                <section className="py-32 px-4 relative overflow-hidden bg-linear-to-b from-gray-950 to-gray-900/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Collaboration */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="h-full p-10 glass-effect rounded-3xl border border-gray-700 shadow-glow">
                                    <h3 className="text-4xl font-bold mb-8">
                                        <span className="gradient-text-multi">
                                            How We Collaborate
                                        </span>
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

                                    <div className="mt-10 pt-8 border-t border-gray-700/50">
                                        <p className="text-gray-400 italic">
                                            "This keeps feedback loops short, decisions intentional, and accountability clear — both internally and with clients."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* What We Don't Do */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="h-full p-10 glass-effect rounded-3xl border border-gray-700 shadow-glow">
                                    <h3 className="text-4xl font-bold mb-8">
                                        <span className="gradient-text-multi">
                                            What We Don't Do
                                        </span>
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

                                    <div className="mt-10 pt-8 border-t border-gray-700/50">
                                        <p className="text-gray-400 italic">
                                            "This signals maturity without aggression. Clients know exactly what to expect."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Final Message */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="mt-20 text-center"
                        >
                            <div className="inline-block max-w-3xl">
                                <p className="text-2xl text-gray-200 mb-6">
                                    "These people know what they're doing — and they know their limits."
                                </p>
                                <p className="text-gray-400">
                                    That's the impression we aim to leave.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-8">
                                <span className="text-gray-100">
                                    Work With A Team
                                </span>
                                <br />
                                <span className="gradient-text-multi">
                                    That Knows Its Purpose
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                                Clear roles, direct communication, and focused execution.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <MagneticButton>
                                <Link href="/contact">
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
                                </Link>
                            </MagneticButton>

                            <Link href="/">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-6 border-2 border-gray-700 rounded-full hover:border-gray-400 transition-all duration-300"
                                >
                                    <span className="text-lg font-semibold text-gray-100">Back to Home</span>
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-16 pt-8 border-t border-gray-800/50"
                        >
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Maloof's Systems. A focused team building practical systems.
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                No fake size. No unnecessary titles. Just real work.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}