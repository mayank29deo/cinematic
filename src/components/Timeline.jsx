import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Mockup from './Mockup'
import './Timeline.css'

gsap.registerPlugin(ScrollTrigger)

/* ─── Work experience data ──────────────────────────────────────── */
const experiences = [
  {
    num: '01',
    current: true,
    period: 'Feb 2026 — Present',
    duration: '2 months',
    role: 'Product & Growth Intern',
    company: 'Vedantu',
    companyType: 'EdTech · Series D startup',
    location: 'Bengaluru · On-site',
    mockupType: 'vedantu',
    bgWord: 'VEDANTU',
    accent: '#6366f1',
    tags: ['Product Analytics', 'Data Analysis', 'SQL', 'Growth', 'EdTech', 'A/B Testing', 'User Funnels', 'Retention'],
    impact: 'Currently driving growth experiments & product analytics for one of India\'s top live-tutoring platforms.',
    points: [
      'Analysing user acquisition funnels and retention cohorts to identify growth levers across the platform.',
      'Running data-driven A/B experiments on onboarding and subscription flows using SQL and product analytics tools.',
      'Collaborating cross-functionally with engineering and design to ship product improvements backed by data.',
    ],
    quote: 'Where product instinct meets data — shipping features that move the growth needle.',
  },
  {
    num: '02',
    current: false,
    period: 'Jan 2026 — Feb 2026',
    duration: '2 months',
    role: 'Product & Strategy Associate',
    company: 'Riverline',
    companyType: 'Early-stage startup · B2B',
    location: 'Bengaluru',
    mockupType: 'riverline',
    bgWord: 'RIVER',
    accent: '#38bdf8',
    tags: ['Product Strategy', 'Product Development', 'JavaScript', 'Market Research', 'GTM'],
    impact: 'Shaped product strategy and go-to-market for an early-stage B2B startup in a fast-moving space.',
    points: [
      'Defined product roadmap priorities based on market research, customer interviews, and competitive landscape analysis.',
      'Built lightweight product demos and internal tools in JavaScript to validate features before engineering investment.',
      'Contributed to GTM strategy, crafting positioning frameworks and sales enablement materials for B2B outreach.',
    ],
    quote: 'Early-stage chaos demands first-principles thinking. Loved every second.',
  },
  {
    num: '03',
    current: false,
    period: 'May 2025 — Jul 2025',
    duration: '3 months',
    role: 'Software Development Intern',
    company: 'Steel Authority of India (SAIL)',
    companyType: 'PSU · India\'s largest steel producer',
    location: 'Bokaro Steel City',
    mockupType: 'sail',
    bgWord: 'SAIL',
    accent: '#c9a84c',
    tags: ['React.js', 'JavaScript', 'SQL', 'Python', 'REST APIs', 'Bootstrap', 'Data Dashboards'],
    impact: '2–3% increase in distribution efficiency across BSL\'s network.',
    points: [
      'Built custom data monitoring dashboards using React.js, SQL & Bootstrap to visualise BSL\'s distribution network performance in real time.',
      'Integrated frontend with Python backend pipelines and REST APIs — identified bottlenecks and achieved a measurable 2–3% efficiency gain.',
      'Presented insights to the engineering operations team, directly influencing workflow optimisation decisions.',
    ],
    quote: 'Turning steel-industry data into decisions — at India\'s largest steel company.',
  },
  {
    num: '04',
    current: false,
    period: 'Aug 2022 — Mar 2025',
    duration: '2.5 years',
    role: 'Operations Lead & Co-Founder',
    company: 'Biryani In Cage',
    companyType: 'Cloud kitchen · D2C food startup',
    location: 'Deoghar, Jharkhand',
    mockupType: 'biryani',
    bgWord: 'BIRYANI',
    accent: '#f97316',
    tags: ['Power BI', 'Business Analytics', 'Supply Chain', 'Pricing Strategy', 'Zomato', 'Swiggy'],
    impact: 'Revenue scaled from ₹8L → ₹22L in 2 years (60% YoY growth).',
    points: [
      'Owned end-to-end business analytics — pricing, supply chain, channel performance — translating data into expansion decisions.',
      'Built and maintained Power BI dashboards monitoring YoY growth, demand trends, inventory turnover, and cost drivers.',
      'Applied forecasting and variance analysis to cut wastage, improve order fulfilment, and optimise menu across Zomato & Swiggy.',
    ],
    quote: 'Before I built products for others, I built and scaled one myself — from a cloud kitchen.',
  },
]

/* ─── Education data ─────────────────────────────────────────────── */
const education = [
  {
    degree: 'B.Tech — Electrical & Electronics Engineering',
    school: 'Birla Institute of Technology Mesra',
    location: 'Ranchi, Jharkhand',
    period: '2022 — 2026',
    grade: 'CGPA: 7.21',
    highlights: ['JEE 98%ile · State Scholar', 'DD Robocon 2024 Team', 'Research Intern Lead', 'Cricket Vice Captain'],
  },
  {
    degree: 'Higher Secondary (Science)',
    school: 'Lord Buddha Public School',
    location: 'Jharkhand',
    period: '2019 — 2021',
    grade: '90.20%',
    highlights: [],
  },
  {
    degree: 'Senior Secondary',
    school: 'Saint Francis School',
    location: 'Deoghar, Jharkhand',
    period: '— 2019',
    grade: '90.33%',
    highlights: [],
  },
]

/* ─── Individual experience scene ───────────────────────────────── */
function ExpScene({ exp, index }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`exp-scene ${isEven ? 'exp-scene--ltr' : 'exp-scene--rtl'}`}
      data-exp-scene
    >
      {/* Giant background company word */}
      <div
        className="exp-bg-word"
        data-exp-num
        style={{ color: `${exp.accent}08` }}
      >
        {exp.bgWord}
      </div>

      {/* Accent top border */}
      <div className="exp-scene-accent" style={{ background: exp.accent }} />

      {/* Text panel */}
      <div className="exp-text-panel" data-exp-text>
        {/* Header */}
        <div className="exp-header">
          <div className="exp-num-badge" data-exp-badge>
            <span style={{ color: exp.accent }}>{exp.num}</span>
          </div>
          {exp.current && (
            <div className="exp-current-badge">
              <span className="exp-current-dot" />
              CURRENT
            </div>
          )}
        </div>

        <div className="exp-company-type" data-exp-category style={{ color: exp.accent }}>{exp.companyType}</div>

        <h3 className="exp-company" data-exp-title>{exp.company}</h3>

        <div className="exp-role-row">
          <span className="exp-role">{exp.role}</span>
          <span className="exp-sep">·</span>
          <span className="exp-duration" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--gray)' }}>{exp.period}</span>
        </div>

        <div className="exp-location" data-exp-story>{exp.location}</div>

        {/* Impact metric */}
        <div className="exp-impact-box" data-exp-impact style={{ borderColor: `${exp.accent}30` }}>
          <span className="exp-impact-label">IMPACT</span>
          <span className="exp-impact-text" style={{ color: exp.accent }}>{exp.impact}</span>
        </div>

        {/* Bullet points */}
        <ul className="exp-points" data-exp-points>
          {exp.points.map((p, i) => (
            <li key={i} className="exp-point">
              <span className="exp-point-dot" style={{ background: exp.accent }} />
              {p}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="exp-tags" data-exp-tags>
          {exp.tags.map(t => (
            <span key={t} className="exp-tag" style={{ borderColor: `${exp.accent}25`, color: 'var(--gray-light)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Quote */}
        <div className="exp-quote" data-exp-quote style={{ borderColor: `${exp.accent}35` }}>
          <span className="exp-quote-mark" style={{ color: exp.accent }}>"</span>
          <p className="exp-quote-text">{exp.quote}</p>
        </div>
      </div>

      {/* Mockup panel */}
      <div className="exp-mockup-panel" data-exp-mockup>
        <Mockup type={exp.mockupType} />
      </div>
    </div>
  )
}

/* ─── Education card ─────────────────────────────────────────────── */
function EduCard({ edu, index, inView }) {
  return (
    <motion.div
      className="edu-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.7 }}
      data-hover
    >
      <div className="edu-period">{edu.period}</div>
      <div className="edu-grade">{edu.grade}</div>
      <h4 className="edu-degree">{edu.degree}</h4>
      <div className="edu-school">{edu.school}</div>
      <div className="edu-location">{edu.location}</div>
      {edu.highlights.length > 0 && (
        <ul className="edu-highlights">
          {edu.highlights.map(h => (
            <li key={h} className="edu-highlight">{h}</li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function Timeline() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const eduRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const eduInView = useInView(eduRef, { once: true, margin: '-80px' })

  useGSAP(
    () => {
      const scenes = gsap.utils.toArray('[data-exp-scene]', containerRef.current)

      scenes.forEach(scene => {
        const bgWord  = scene.querySelector('[data-exp-num]')
        const text    = scene.querySelector('[data-exp-text]')
        const mockup  = scene.querySelector('[data-exp-mockup]')
        const cat     = scene.querySelector('[data-exp-category]')
        const title   = scene.querySelector('[data-exp-title]')
        const story   = scene.querySelector('[data-exp-story]')
        const impact  = scene.querySelector('[data-exp-impact]')
        const points  = scene.querySelectorAll('.exp-point')
        const tags    = scene.querySelector('[data-exp-tags]')
        const quote   = scene.querySelector('[data-exp-quote]')
        const isRtl   = scene.classList.contains('exp-scene--rtl')

        gsap.set(bgWord,  { scale: 1.25, opacity: 0 })
        gsap.set(text,    { x: isRtl ? 70 : -70, opacity: 0 })
        gsap.set(mockup,  { x: isRtl ? -70 : 70, opacity: 0 })
        if (cat)    gsap.set(cat,    { opacity: 0, y: 10 })
        if (title)  gsap.set(title,  { opacity: 0, y: 25 })
        if (story)  gsap.set(story,  { opacity: 0, y: 15 })
        if (impact) gsap.set(impact, { opacity: 0, y: 15, scale: 0.97 })
        if (points.length) gsap.set(points, { opacity: 0, x: -12 })
        if (tags)   gsap.set(tags,   { opacity: 0 })
        if (quote)  gsap.set(quote,  { opacity: 0, y: 10 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: 'top 75%',
            once: true,
          },
        })

        tl.to(bgWord, { scale: 1, opacity: 1, duration: 1.0, ease: 'power3.out' })
          .to([text, mockup], { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.07 }, '-=0.55')
          .to(cat,    { opacity: 1, y: 0, duration: 0.45 }, '-=0.3')
          .to(title,  { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.3')
          .to(story,  { opacity: 1, y: 0, duration: 0.4 }, '-=0.25')
          .to(impact, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.2')
          .to(points, { opacity: 1, x: 0, duration: 0.35, stagger: 0.08 }, '-=0.2')
          .to(tags,   { opacity: 1, duration: 0.35 }, '-=0.1')
          .to(quote,  { opacity: 1, y: 0, duration: 0.4 }, '-=0.15')
      })
    },
    { scope: containerRef }
  )

  return (
    <section id="timeline" className="timeline-section">
      {/* Section header */}
      <div className="tl-header-wrap" ref={headerRef}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          02 / The Journey
        </motion.span>

        <motion.h2
          className="section-title tl-header-title"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          4 ROLES.<br /><span>BUILT FROM SCRATCH.</span>
        </motion.h2>

        <motion.p
          className="tl-header-sub"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          From a cloud kitchen in Deoghar to a Series D EdTech in Bengaluru —
          every role built real things with real stakes.
        </motion.p>

        <div className="divider" />
      </div>

      {/* Experience scenes */}
      <div ref={containerRef} className="exp-scenes">
        {experiences.map((exp, i) => (
          <ExpScene key={exp.num} exp={exp} index={i} />
        ))}
      </div>

      {/* Education section */}
      <div className="edu-section" ref={eduRef}>
        <div className="edu-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={eduInView ? { opacity: 1 } : {}}
          >
            Education
          </motion.span>
          <motion.h3
            className="edu-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            THE<br /><span>FOUNDATION</span>
          </motion.h3>
          <div className="divider" />
          <div className="edu-grid">
            {education.map((edu, i) => (
              <EduCard key={edu.school} edu={edu} index={i} inView={eduInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
