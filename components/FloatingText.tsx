// components/FloatingText.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingTextProps {
    text: string
    className?: string
}

export function FloatingText({ text, className = '' }: FloatingTextProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {text}
        </motion.div>
    )
}