import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { projects } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-2">What I've built</p>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
            <div className="w-16 h-0.5 bg-grad-tc-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card group hover:shadow-2xl hover:shadow-terracotta/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="h-1 rounded-full mb-5 w-16 transition-all duration-300 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }}
                />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-bold text-ivory group-hover:text-terracotta transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass text-muted hover:text-ivory transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass text-muted hover:text-terracotta transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((f) => (
                    <span key={f} className="flex items-center gap-1 text-xs text-muted/80 px-2 py-0.5 rounded bg-white/5">
                      <FiStar size={10} style={{ color: project.color }} />
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
