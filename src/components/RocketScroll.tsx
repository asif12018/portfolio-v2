'use client'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function RocketScroll() {
  const { scrollYProgress } = useScroll()
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const [lastY, setLastY] = useState(0)

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > lastY) setDirection('down')
    else if (latest < lastY) setDirection('up')
    setLastY(latest)
  })

  const topPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="fixed right-4 sm:right-8 top-32 bottom-32 w-8 pointer-events-none z-50 flex justify-center">
      {/* Subtle track line */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-white/5 rounded-full">
        
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
          style={{
            top: topPosition,
            y: "-50%",
          }}
        >
          {/* Flame effect */}
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${direction === 'up' ? 'bottom-[-10px]' : 'top-[-10px]'} w-6 h-6 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full blur-[8px] -z-10`}
          />

          <motion.div
            animate={{ rotate: direction === 'up' ? -45 : 135 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-[#7c3aed] drop-shadow-[0_0_15px_rgba(124,58,237,0.9)]"
          >
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  )
}
