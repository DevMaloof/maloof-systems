// components/Card3D.tsx
'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface Card3DProps {
    children: ReactNode
}

export function Card3D({ children }: Card3DProps) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct * 20)
        y.set(-yPct * 20)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            style={{
                rotateY: mouseXSpring,
                rotateX: mouseYSpring,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="perspective-1000"
        >
            <div style={{ transform: 'translateZ(50px)' }}>
                {children}
            </div>
        </motion.div>
    )
}