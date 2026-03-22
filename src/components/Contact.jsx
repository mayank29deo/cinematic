import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const links = [
  {
    label: 'Email',
    value: 'mayank29deo@gmail.com',
    href: 'mailto:mayank29deo@gmail.com',
    mono: true,
  },
  {
    label: 'Phone',
    value: '+91 7004 369 269',
    href: 'tel:+917004369269',
    mono: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mayank-narayan-a61500228',
    href: 'https://www.linkedin.com/in/mayank-narayan-a61500228/',
    mono: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/mayank29deo',
    href: 'https://github.com/mayank29deo',
    mono: false,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          06 / Let's Talk
        </motion.span>

        <div className="contact-layout">
          {/* Left */}
          <div className="contact-left">
            <motion.h2
              className="section-title contact-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              OPEN FOR<br /><span>OPPORTUNITIES.</span>
            </motion.h2>

            <div className="divider" />

            <motion.p
              className="contact-body"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Graduating in 2026. Looking for full-time roles in software development,
              data analytics, or product engineering. If you're building something
              interesting — I'd love to be part of it.
            </motion.p>

            <motion.p
              className="contact-body"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Internships, freelance projects, and open-source collabs are also
              very welcome.
            </motion.p>

            <motion.a
              href="mailto:mayank29deo@gmail.com"
              className="contact-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              data-hover
            >
              Say Hello →
            </motion.a>
          </div>

          {/* Right: contact links */}
          <div className="contact-right">
            {links.map(({ label, value, href, mono }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-link-card"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                data-hover
              >
                <span className="contact-link-label">{label}</span>
                <span className={`contact-link-value ${mono ? 'mono' : ''}`}>{value}</span>
                <span className="contact-link-arrow">→</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div className="contact-footer-left">
            <span className="contact-footer-name">MAYANK NARAYAN</span>
            <span className="contact-footer-sep">·</span>
            <span className="contact-footer-sub">EEE · BIT Mesra · 2026</span>
          </div>
          <div className="contact-footer-right">
            <span>Portfolio 2026 · Built with React + Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
