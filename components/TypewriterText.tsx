// components/TypewriterText.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypewriterTextProps {
    texts: string[]
    className?: string
    speed?: number
    delay?: number
}

export function TypewriterText({ texts, className = '', speed = 100, delay = 2000 }: TypewriterTextProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = texts[currentTextIndex]

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), delay)
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false)
                setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            } else {
                setCurrentText(prev => isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1))
            }
        }, isDeleting ? speed / 2 : speed)

        return () => clearTimeout(timeout)
    }, [currentText, currentTextIndex, isDeleting, texts, speed, delay])

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`inline-block ${className}`}
            >
                {currentText}
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                >
                    ▊
                </motion.span>
            </motion.span>
        </AnimatePresence>
    )
}