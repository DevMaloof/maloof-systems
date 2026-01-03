// app/page.tsx
'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { WhyUs } from '@/components/sections/WhyUs'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { FloatingOrbs } from '@/components/FloatingOrbs'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingOrbs />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10"
      >
        <HeroSection />

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />

          <WhatWeDo />

          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-950/80 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          <HowWeWork />

          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-950/80 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent" />
          </div>

          <WhyUs />

          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-950/80 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
          </div>

          <CTASection />
        </div>
      </motion.div>
    </div>
  )
}