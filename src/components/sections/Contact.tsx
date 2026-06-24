import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

// Replace these with your real EmailJS credentials in a .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { ref, inView } = useInView()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('loading')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  const contacts = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/emerance-umurerwa', href: personalInfo.linkedin },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/EmeranceU', href: personalInfo.github },
  ]

  return (
    <section id="contact" className="section-padding bg-slate/30">
      <div className="container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-2">Let's talk</p>
            <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
            <div className="w-16 h-0.5 bg-grad-tc-gold mx-auto mt-4" />
            <p className="text-muted mt-4 max-w-lg mx-auto">
              Whether you have a project in mind, an opportunity to share, or just want to connect — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              <div className="card flex-1">
                <h3 className="font-semibold text-ivory mb-2">Let's Build Something Together</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, exciting projects, or partnerships that create real impact.
                </p>
                <div className="flex flex-col gap-4">
                  {contacts.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                        <Icon className="text-terracotta" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{label}</p>
                        <p className="text-sm text-ivory group-hover:text-terracotta transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="card flex flex-col gap-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm text-muted mb-1.5">Your Name</label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-muted/50
                               focus:outline-none focus:border-terracotta/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm text-muted mb-1.5">Email Address</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-muted/50
                               focus:outline-none focus:border-terracotta/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hi Emerance, I'd love to connect about..."
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-muted/50
                               focus:outline-none focus:border-terracotta/60 transition-colors resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-sage text-sm bg-sage/10 border border-sage/20 rounded-xl px-4 py-3">
                    <FiCheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-coral text-sm bg-coral/10 border border-coral/20 rounded-xl px-4 py-3">
                    <FiAlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
