import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const facts = [
  {
    icon: '⚡',
    label: 'Hardware Roots',
    text: 'EEE at BIT Mesra gave me the ability to think in systems — from Verilog circuits to full-stack architectures.',
  },
  {
    icon: '📊',
    label: 'Data Storyteller',
    text: 'Built Power BI dashboards at a cloud kitchen from scratch, turning raw operational data into growth decisions.',
  },
  {
    icon: '🌾',
    label: 'Real-World Builder',
    text: 'Built an AI-powered Agritech app to connect farmers with markets — bilingual, cross-platform, production-deployed.',
  },
  {
    icon: '📈',
    label: 'Stock Market Nerd',
    text: 'Built Stockd, a full Indian stock market recommendation platform, from market data APIs to beautiful UI.',
  },
]

/* ─── Animated counter hook ──────────────────────────── */
function useCounter(target, inView, duration = 1400) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return value
}

/* ─── Individual stat card ────────────────────────────── */
function StatCounter({ value, suffix = '', label, inView, duration = 1400, delay = 0 }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setActive(true), delay)
      return () => clearTimeout(t)
    }
  }, [inView, delay])

  const count = useCounter(value, active, duration)

  return (
    <div className="about-stat">
      <span className="about-stat-n">
        {count}{suffix}
      </span>
      <span className="about-stat-l">{label}</span>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about" ref={ref}>
      {/* Giant chapter title bg text */}
      <div className="about-bg-chapter" aria-hidden="true">THE STORY</div>

      <div className="about-container">
        {/* Left: text */}
        <div className="about-left">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            01 / The Story
          </motion.span>

          <motion.h2
            className="section-title about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            NOT JUST<br /><span>A RÉSUMÉ.</span>
          </motion.h2>

          <div className="divider" />

          <motion.p
            className="about-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            I'm Mayank — a final-year Electrical & Electronics Engineering student at BIT Mesra, Ranchi.
            While my degree is in circuits, my curiosity led me deep into software, data, and product building.
          </motion.p>

          <motion.p
            className="about-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            I ran operations at a cloud kitchen, analysed stock markets late at night, interned at SAIL writing
            dashboards for India's largest steel company, and shipped products that real people use. I build
            things at the messy intersection of engineering instinct and data intuition.
          </motion.p>

          {/* Pullout quote — dramatic treatment */}
          <motion.div
            className="about-quote"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <div className="about-quote-mark" aria-hidden="true">"</div>
            <p className="about-quote-text">
              98 percentile in JEE. Vice Captain of Cricket. Head of Operations. State Scholar.
              I don't just write code —<br />
              <em>I lead, I analyse, I build.</em>
            </p>
            <div className="about-quote-accent" />
          </motion.div>

          {/* Animated stats row */}
          <motion.div
            className="about-stats-row"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <StatCounter value={400}  suffix="+"  label="DSA Solved"      inView={inView} delay={200} duration={1200} />
            <StatCounter value={22}   suffix="L"  label="Revenue Managed" inView={inView} delay={400} duration={1000} />
            <StatCounter value={60}   suffix="%"  label="YoY Growth"      inView={inView} delay={600} duration={1000} />
            <StatCounter value={19}   suffix="+"  label="Projects Shipped" inView={inView} delay={800} duration={900} />
          </motion.div>

          {/* Contact */}
          <motion.div
            className="about-contact-row"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="mailto:mayank29deo@gmail.com" className="about-link" data-hover>
              mayank29deo@gmail.com
            </a>
            <span className="about-link-sep">·</span>
            <a href="tel:+917004369269" className="about-link" data-hover>
              +91 7004369269
            </a>
            <span className="about-link-sep">·</span>
            <a
              href="https://www.linkedin.com/in/mayank-narayan-a61500228/"
              target="_blank"
              rel="noreferrer"
              className="about-link"
              data-hover
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right: fact cards */}
        <div className="about-right">
          {facts.map(({ icon, label, text }, i) => (
            <motion.div
              key={label}
              className="about-card"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
              data-hover
            >
              <div className="about-card-icon">{icon}</div>
              <div>
                <div className="about-card-label">{label}</div>
                <p className="about-card-text">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
