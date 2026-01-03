// components/FloatingElements.tsx
'use client'

import { motion } from 'framer-motion'

export function FloatingElements() {
    const elements = [
        { emoji: '⚡', delay: 0, size: 'text-4xl' },
        { emoji: '✨', delay: 0.5, size: 'text-3xl' },
        { emoji: '🎯', delay: 1, size: 'text-4xl' },
        { emoji: '🚀', delay: 1.5, size: 'text-3xl' },
    ]

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {elements.map((element, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${element.size} opacity-20`}
                    style={{
                        left: `${20 + index * 15}%`,
                        top: `${30 + index * 10}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {element.emoji}
                </motion.div>
            ))}
        </div>
    )
}