import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Achievements.css'

const items = [
  {
    icon: '🏆',
    title: '96 Percentile — JEE 2022',
    subtitle: 'State Govt. Jharkhand Scholarship',
    desc: 'Placed in the top 4% of 1.2 million engineering aspirants across India, earning a state-level scholarship to pursue engineering at BIT Mesra.',
    category: 'Academic',
  },
  {
    icon: '🤖',
    title: 'DD Robocon 2024',
    subtitle: 'BIT Mesra National Team',
    desc: 'Co-led the design and testing of a precision football-shooting mechanism for BIT Mesra\'s team in India\'s premier robotics competition, ABU Robocon.',
    category: 'Engineering',
  },
  {
    icon: '💻',
    title: '400+ DSA Problems',
    subtitle: 'LeetCode & GeeksforGeeks',
    desc: 'Consistently solved 400+ algorithmic problems spanning arrays, dynamic programming, graphs, trees — demonstrating strong CS fundamentals beyond the EEE curriculum.',
    category: 'Coding',
  },
  {
    icon: '🏏',
    title: 'Vice Captain — Cricket',
    subtitle: 'BIT Mesra University Team',
    desc: 'Led the university cricket team to multiple inter-college victories. Off-field, applying the same team-building and strategic instincts to software projects.',
    category: 'Leadership',
  },
  {
    icon: '📊',
    title: '₹8L → ₹22L Revenue',
    subtitle: 'Biryani In Cage · 2 Years',
    desc: 'As Operations Lead & co-founder of a cloud kitchen, drove 60% YoY growth using data-driven pricing, Power BI dashboards, and supply chain optimization.',
    category: 'Business',
  },
  {
    icon: '🔬',
    title: 'Research Intern Lead',
    subtitle: 'BIT Mesra',
    desc: 'Led a research internship project at BIT Mesra, combining academic rigor with practical experimentation — bridging the gap between theory and applied engineering.',
    category: 'Research',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="ach-section" ref={ref}>
      <div className="ach-container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          05 / The Highlights
        </motion.span>

        <motion.h2
          className="section-title ach-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          BEYOND<br /><span>THE CODE.</span>
        </motion.h2>

        <div className="divider" />

        <div className="ach-grid">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="ach-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
              data-hover
            >
              <div className="ach-card-top">
                <span className="ach-icon">{item.icon}</span>
                <span className="ach-category">{item.category}</span>
              </div>
              <h3 className="ach-card-title">{item.title}</h3>
              <div className="ach-card-sub">{item.subtitle}</div>
              <p className="ach-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
