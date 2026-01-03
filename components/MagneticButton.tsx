// components/MagneticButton.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MagneticButtonProps {
    children: ReactNode
}

export function MagneticButton({ children }: MagneticButtonProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
        </motion.div>
    )
}