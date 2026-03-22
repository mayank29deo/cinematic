import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['React.js', 'Vite', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Bootstrap', 'Framer Motion'],
  },
  {
    category: 'Backend & Data',
    icon: '◉',
    skills: ['Python', 'FastAPI', 'SQL', 'REST APIs', 'Pandas', 'NumPy', 'Jupyter'],
  },
  {
    category: 'Analytics & Viz',
    icon: '◎',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Excel'],
  },
  {
    category: 'Systems & Tools',
    icon: '◆',
    skills: ['Verilog HDL', 'MATLAB', 'Arduino', 'GitHub', 'VS Code', 'Vercel'],
  },
  {
    category: 'Machine Learning',
    icon: '◐',
    skills: ['TensorFlow.js', 'Image Classification', 'Data Preprocessing'],
  },
  {
    category: 'Languages',
    icon: '▣',
    skills: ['JavaScript', 'Python', 'C', 'C++', 'SQL'],
  },
]

const coreStrengths = [
  { label: 'Product Building', pct: 90 },
  { label: 'Data Analysis & BI', pct: 85 },
  { label: 'Frontend Development', pct: 82 },
  { label: 'DSA & Problem Solving', pct: 78 },
  { label: 'Backend / APIs', pct: 70 },
  { label: 'Hardware & Verilog', pct: 65 },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04 / The Arsenal
        </motion.span>

        <motion.h2
          className="section-title skills-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          TOOLS &<br /><span>TECHNOLOGIES</span>
        </motion.h2>

        <div className="divider" />

        <div className="skills-layout">
          {/* Left: strength bars */}
          <div className="skills-bars">
            <div className="skills-bars-label">Core Strengths</div>
            {coreStrengths.map(({ label, pct }, i) => (
              <motion.div
                key={label}
                className="skill-bar-item"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              >
                <div className="skill-bar-meta">
                  <span className="skill-bar-name">{label}</span>
                  <span className="skill-bar-pct">{pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: skill chips */}
          <div className="skills-chips">
            {skillGroups.map(({ category, icon, skills }, gi) => (
              <motion.div
                key={category}
                className="skill-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.08, duration: 0.6 }}
              >
                <div className="skill-group-header">
                  <span className="skill-group-icon">{icon}</span>
                  <span className="skill-group-name">{category}</span>
                </div>
                <div className="skill-chips-row">
                  {skills.map(s => (
                    <span key={s} className="skill-chip" data-hover>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
