import { motion } from 'framer-motion'
import { FiCalendar, FiBriefcase, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { experiences } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

const typeIcon = { Leadership: FiBriefcase, Community: FiUsers }

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section-padding bg-slate/30">
      <div className="container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-2">My journey</p>
            <h2 className="section-title">Experience & <span className="gradient-text">Leadership</span></h2>
            <div className="w-16 h-0.5 bg-grad-tc-gold mx-auto mt-4" />
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta via-gold to-transparent hidden sm:block" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp, i) => {
                const Icon = typeIcon[exp.type as keyof typeof typeIcon] || FiBriefcase
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="sm:pl-16 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-grad-tc-gold hidden sm:flex items-center justify-center shadow-lg shadow-terracotta/30">
                      <div className="w-2 h-2 rounded-full bg-charcoal" />
                    </div>

                    <div className="card hover:shadow-xl hover:shadow-terracotta/10 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                          <Icon className="text-terracotta" size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <div>
                              <h3 className="font-semibold text-ivory">{exp.role}</h3>
                              <p className="text-terracotta font-medium text-sm">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-muted text-xs shrink-0">
                              <FiCalendar size={12} />
                              {exp.period}
                            </div>
                          </div>

                          <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-terracotta/10 text-terracotta border border-terracotta/20 mb-4">
                            {exp.type}
                          </span>

                          <ul className="flex flex-col gap-2">
                            {exp.achievements.map((a) => (
                              <li key={a} className="flex items-start gap-2 text-sm text-muted">
                                <FiCheckCircle className="text-sage mt-0.5 shrink-0" size={14} />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
