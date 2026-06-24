import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

const categoryColors: Record<string, string> = {
  Frontend: '#C96A3D',
  Backend: '#D4A017',
  'Database & Cloud': '#E76F51',
  Tools: '#7A9E7E',
}

function SkillBar({ name, level, color, inView, delay }: {
  name: string; level: number; color: string; inView: boolean; delay: number
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5 text-sm">
        <span className="text-ivory font-medium">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section-padding bg-slate/30">
      <div className="container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-2">What I know</p>
            <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
            <div className="w-16 h-0.5 bg-grad-tc-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, ci) => {
              const color = categoryColors[cat.name] || '#C96A3D'
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: ci * 0.1 }}
                  className="card hover:shadow-xl hover:shadow-terracotta/5 transition-shadow duration-300"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: color }}
                    />
                    <h3 className="font-semibold text-ivory">{cat.name}</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {cat.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={color}
                        inView={inView}
                        delay={ci * 0.1 + si * 0.08}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
