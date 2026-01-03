// components/FloatingOrbs.tsx
'use client'

import { motion } from 'framer-motion'

export function FloatingOrbs() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${150 + i * 30}px`,
                        height: `${150 + i * 30}px`,
                        background: i % 3 === 0
                            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
                            : i % 3 === 1
                                ? 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [0, Math.sin(i) * 100, 0],
                        y: [0, Math.cos(i) * 100, 0],
                    }}
                    transition={{
                        duration: 15 + i * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}