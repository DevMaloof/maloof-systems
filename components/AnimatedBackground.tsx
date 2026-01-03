// components/AnimatedBackground.tsx
'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-950 to-black" />

            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${100 + i * 50}px`,
                        height: `${100 + i * 50}px`,
                        background: i % 2 === 0
                            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                        left: `${10 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                    }}
                    animate={{
                        x: [0, Math.sin(i) * 50, 0],
                        y: [0, Math.cos(i) * 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}