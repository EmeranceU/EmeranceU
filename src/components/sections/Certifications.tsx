import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiClock } from 'react-icons/fi'
import { certifications } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

export default function Certifications() {
  const { ref, inView } = useInView()

  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-2">Credentials</p>
            <h2 className="section-title">Certifications & <span className="gradient-text">Learning</span></h2>
            <div className="w-16 h-0.5 bg-grad-tc-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card group hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta/10 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-grad-tc-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FiAward className="text-white" size={22} />
                </div>

                <h3 className="font-semibold text-ivory text-sm leading-snug mb-1 flex-1">
                  {cert.title}
                </h3>
                <p className="text-muted text-xs mb-3">{cert.issuer}</p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                  <span className="text-muted text-xs">{cert.date}</span>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                      cert.status === 'completed'
                        ? 'bg-sage/15 text-sage border border-sage/25'
                        : 'bg-gold/15 text-gold border border-gold/25'
                    }`}
                  >
                    {cert.status === 'completed'
                      ? <><FiCheckCircle size={10} /> Done</>
                      : <><FiClock size={10} /> In Progress</>
                    }
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-muted text-sm mt-8"
          >
            More certifications being added as they are completed.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
