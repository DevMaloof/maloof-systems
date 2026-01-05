// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4">
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
            <span className="block text-gray-100">We build</span>
            <span className="block gradient-text mt-2">practical systems</span>
            <span className="block text-gray-100 mt-2">for real businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Maloof's Systems designs reservation platforms, e-commerce systems, and internal dashboards — built for clarity, reliability, and long-term use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/team" className="btn-outline">
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What We Build</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systems that support real operations, not demo projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Booking & Scheduling Systems",
                description: "Custom-built platforms that handle real-world availability, confirmations, and operational limits.",
                icon: "📅"
              },
              {
                title: "Commerce & Transaction Systems",
                description: "End-to-end selling systems with structured product flows, payments, and order management.",
                icon: "💳"
              },
              {
                title: "Internal & Operational Systems",
                description: "Custom dashboards and tools that give teams clarity, control, and actionable insights.",
                icon: "🧭"
              }

            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover-lift"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-100">Ready to build</span>
              <span className="block gradient-text">something practical?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're looking to build or improve a practical web system, we'd be glad to talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/team" className="btn-outline">
                Learn About Us
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
                "Building the digital backbone of tomorrow's successful businesses."
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