import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiMail } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 106, 61, ${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(201, 106, 61, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Particles />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

      <div className="container-max relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-terracotta/30 text-terracotta text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse-slow" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Emerance</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl text-muted font-medium mb-4"
          >
            {personalInfo.subtitle}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted text-lg max-w-xl leading-relaxed mb-10"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary flex items-center gap-2">
              View Projects <FiArrowRight />
            </button>
            <a href={personalInfo.resumeUrl} download className="btn-outline flex items-center gap-2">
              <FiDownload /> Download Resume
            </a>
            <button onClick={() => scrollTo('contact')} className="btn-outline flex items-center gap-2">
              <FiMail /> Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-terracotta hover:border-terracotta/40 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-terracotta hover:border-terracotta/40 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-terracotta hover:border-terracotta/40 transition-all duration-200"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted"
      >
        <div className="w-5 h-8 rounded-full border border-muted/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-terracotta" />
        </div>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
