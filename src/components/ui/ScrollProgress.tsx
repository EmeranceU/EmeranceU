import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(progress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setProgress(scrolled)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-grad-tc-gold z-[60] origin-left"
      style={{ scaleX }}
    />
  )
}
