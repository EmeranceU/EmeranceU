import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'

export default function Footer() {
  const socials = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xl font-display font-bold gradient-text">Emerance Umurerwa</p>
          <p className="text-muted text-sm mt-1">Backend & Full-Stack Developer</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center
                         text-muted hover:text-terracotta hover:border-terracotta/40
                         transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-muted text-sm text-center sm:text-right">
          © {new Date().getFullYear()} Emerance Umurerwa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
