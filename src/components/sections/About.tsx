import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiBook } from 'react-icons/fi'
import { stats } from '../../data/portfolio'
import { useCounter } from '../../hooks/useCounter'
import { useInView } from '../../hooks/useInView'

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2000)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="card text-center">
      <p className="text-4xl font-display font-bold gradient-text">
        {count}{suffix}
      </p>
      <p className="text-muted text-sm mt-1">{label}</p>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-2">Get to know me</p>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <div className="w-16 h-0.5 bg-grad-tc-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-grad-tc-gold rounded-3xl opacity-20 blur-xl" />
                <div className="relative glass rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-grad-tc-gold flex items-center justify-center text-white font-display font-bold text-lg">
                      EU
                    </div>
                    <div>
                      <p className="font-semibold text-ivory">Emerance Umurerwa</p>
                      <p className="text-muted text-sm">Software Engineering Student</p>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-6">
                    I'm a passionate Software Engineering student at the African Leadership University (ALU),
                    driven by the belief that technology can transform lives. I specialize in backend and
                    full-stack development, building systems that are both functional and impactful.
                  </p>

                  <p className="text-muted leading-relaxed mb-6">
                    Beyond code, I co-founded BESTIM, a community initiative that has supported over 200
                    beneficiaries — proof that I build not just software, but solutions that matter.
                  </p>

                  <div className="flex flex-col gap-3">
                    {[
                      { icon: FiMapPin, text: 'African Leadership University (ALU)' },
                      { icon: FiCalendar, text: 'Expected Graduation: July 2027' },
                      { icon: FiBook, text: 'Software Development · Data Systems · Tech for Social Impact' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-start gap-3 text-sm">
                        <Icon className="text-terracotta mt-0.5 shrink-0" size={16} />
                        <span className="text-muted">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Stats + highlights */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                  <StatCard key={s.label} {...s} />
                ))}
              </div>

              <div className="card">
                <h3 className="font-semibold text-ivory mb-4">Core Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Web Applications', 'Backend Systems', 'Data Engineering',
                    'Open Source', 'Social Impact Tech', 'Cloud Computing',
                    'API Design', 'Community Building',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-terracotta/10 text-terracotta border border-terracotta/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
