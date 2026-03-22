import { useEffect, useRef, useState, useCallback } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import Mockup from './Mockup'
import './Hero.css'

/* ─── Particle canvas ───────────────────────────────────────────── */
function ParticleCanvas({ offsetX, offsetY }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    let raf

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.35 + 0.06,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const ox = offsetX ? offsetX.get() : 0
      const oy = offsetY ? offsetY.get() : 0
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x + ox * 0.3, p.y + oy * 0.3, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [offsetX, offsetY])

  return <canvas ref={canvasRef} className="hero-canvas" />
}

/* ─── Letter reveal ──────────────────────────────────────────────── */
function LetterReveal({ text, className, baseDelay = 0, gold = false }) {
  return (
    <div className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className={`hero-letter${gold ? ' hero-letter--gold' : ''}`}
          style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: baseDelay + i * 0.045,
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </div>
  )
}

/* ─── Ticker ─────────────────────────────────────────────────────── */
const TICKER_ITEMS =
  'React.js ◆ Python ◆ Power BI ◆ TensorFlow.js ◆ PACKD ◆ KisanSaathi ◆ Stockd ◆ 400+ DSA ◆ JEE 96%ile ◆ BIT Mesra ◆ SAIL Intern ◆ FastAPI ◆ Pandas ◆ Framer Motion ◆ GSAP ◆ TypeScript ◆ '

/* ─── Highlight reel data ────────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    badge: 'CURRENT ROLE · FEB 2026',
    type: 'EXPERIENCE',
    title: 'VEDANTU',
    subtitle: 'Product & Growth Intern',
    impact: 'Driving A/B experiments & retention cohorts for India\'s largest live-tutoring platform.',
    accent: '#6366f1',
    tags: ['SQL', 'A/B Testing', 'Retention', 'Analytics'],
    stat: { val: 'Series D', label: 'EdTech' },
    mockupType: 'vedantu',
  },
  {
    badge: 'FEATURED PROJECT',
    type: 'PROJECT',
    title: 'STOCKD',
    subtitle: 'Indian Stock Intelligence Platform',
    impact: 'Full-stack recommendation engine — NSE data APIs to a live React dashboard.',
    accent: '#c9a84c',
    tags: ['React', 'Python', 'FastAPI', 'NSE APIs'],
    stat: { val: 'Live', label: 'on Vercel' },
    mockupType: 'stockd',
  },
  {
    badge: 'INTERNSHIP · SAIL · PSU',
    type: 'EXPERIENCE',
    title: 'BSL MONITOR',
    subtitle: 'Software Dev · India\'s Largest Steel Co.',
    impact: 'Built React + SQL dashboards, achieving a measurable 2–3% distribution efficiency gain.',
    accent: '#c9a84c',
    tags: ['React.js', 'Python', 'SQL', 'REST APIs'],
    stat: { val: '+2.8%', label: 'Efficiency' },
    mockupType: 'sail',
  },
  {
    badge: 'AGRITECH · AI · PRODUCTION',
    type: 'PROJECT',
    title: 'KISAN SAATHI',
    subtitle: 'AI-Powered Farmer Marketplace',
    impact: 'Bilingual cross-platform app connecting farmers with markets via AI crop diagnosis.',
    accent: '#4ade80',
    tags: ['React Native', 'TensorFlow.js', 'Bilingual'],
    stat: { val: 'Live', label: 'Deployed' },
    mockupType: 'kisansaathi',
  },
]

const CYCLE_MS = 4000

/* ─── Slide variants ─────────────────────────────────────────────── */
const slideVariants = {
  enter: dir => ({
    x: dir > 0 ? 70 : -70,
    opacity: 0,
    filter: 'blur(10px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  exit: dir => ({
    x: dir > 0 ? -70 : 70,
    opacity: 0,
    filter: 'blur(8px)',
    transition: { duration: 0.38, ease: [0.7, 0, 0.84, 0] },
  }),
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(1)
  const [progressKey, setProgressKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const activeIdxRef = useRef(0)

  /* Mouse parallax */
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springCfg = { stiffness: 60, damping: 20, mass: 1 }
  const mouseX = useSpring(rawX, springCfg)
  const mouseY = useSpring(rawY, springCfg)
  const spotX  = useSpring(rawX, { stiffness: 80, damping: 30 })
  const spotY  = useSpring(rawY, { stiffness: 80, damping: 30 })

  const bgX = useTransform(mouseX, v => v * -0.014)
  const bgY = useTransform(mouseY, v => v * -0.014)
  const fgX = useTransform(mouseX, v => v * 0.007)
  const fgY = useTransform(mouseY, v => v * 0.007)

  const spotGradX = useTransform(spotX, v => 50 + v * 0.012)
  const spotGradY = useTransform(spotY, v => 50 + v * 0.012)

  const handleMouseMove = e => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    rawX.set(e.clientX - cx)
    rawY.set(e.clientY - cy)
  }

  /* Cycle logic */
  const goTo = useCallback((idx, dir) => {
    activeIdxRef.current = idx
    setDirection(dir)
    setActiveIdx(idx)
    setProgressKey(k => k + 1)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      const next = (activeIdxRef.current + 1) % HIGHLIGHTS.length
      goTo(next, 1)
    }, CYCLE_MS)
    return () => clearInterval(t)
  }, [paused, goTo])

  const goToIdx = idx => {
    const dir = idx > activeIdxRef.current ? 1 : -1
    goTo(idx, dir)
  }

  const highlight = HIGHLIGHTS[activeIdx]

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove}>
      <ParticleCanvas offsetX={mouseX} offsetY={mouseY} />

      {/* Spotlight */}
      <motion.div
        className="hero-spotlight"
        style={{
          background: useTransform(
            [spotGradX, spotGradY],
            ([x, y]) =>
              `radial-gradient(circle 700px at ${x}% ${y}%, rgba(201,168,76,0.065) 0%, transparent 70%)`
          ),
        }}
      />

      {/* BG ghost text */}
      <motion.div className="hero-bg-text" style={{ x: bgX, y: bgY }}>
        NARAYAN
      </motion.div>

      <div className="hero-vignette" />

      {/* ── Main cinematic grid ── */}
      <motion.div className="hero-grid" style={{ x: fgX, y: fgY }}>

        {/* ── LEFT: Identity panel ── */}
        <div className="hero-left">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="hero-label-line" />
            BIT MESRA · EEE · CLASS OF 2026
          </motion.div>

          <div className="hero-title-wrap" style={{ perspective: '800px' }}>
            <LetterReveal text="MAYANK"  className="hero-name" baseDelay={0.3} />
            <LetterReveal text="NARAYAN" className="hero-name" baseDelay={0.62} gold />
          </div>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
          >
            <span className="hero-role-dash">—</span>
            <span className="hero-role-word">Builder</span>
            <span className="hero-role-dot">·</span>
            <span className="hero-role-word">Analyst</span>
            <span className="hero-role-dot">·</span>
            <span className="hero-role-word">Engineer</span>
            <span className="hero-role-dash">—</span>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            {[
              { n: '4', label: 'Roles' },
              { n: '19+', label: 'Projects' },
              { n: '400+', label: 'DSA Solved' },
              { n: '96%ile', label: 'JEE' },
            ].map(({ n, label }) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-n">{n}</span>
                <span className="hero-stat-l">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          >
            <a href="#timeline" className="hero-cta hero-cta--primary" data-hover>
              Explore My Journey
            </a>
            <a href="mailto:mayank29deo@gmail.com" className="hero-cta hero-cta--ghost" data-hover>
              Get in Touch
            </a>
          </motion.div>

          {/* Section nav pills */}
          <motion.div
            className="hero-nav-pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.7 }}
          >
            {['#about', '#timeline', '#projects'].map((href, i) => (
              <a
                key={href}
                href={href}
                className="hero-nav-pill"
                data-hover
              >
                {['The Story', 'Experience', 'Projects'][i]}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Cinematic highlight reel ── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Film perforations — left */}
          <div className="hero-perfs hero-perfs--left">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="hero-perf" />
            ))}
          </div>

          {/* Film perforations — right */}
          <div className="hero-perfs hero-perfs--right">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="hero-perf" />
            ))}
          </div>

          {/* Main reel panel */}
          <div className="hero-reel-panel">
            {/* Progress bar */}
            <div className="hero-reel-progress-track">
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={i}
                  className={`hero-reel-seg ${i === activeIdx ? 'hero-reel-seg--active' : i < activeIdx ? 'hero-reel-seg--done' : ''}`}
                  style={{
                    '--seg-accent': h.accent,
                    '--seg-dur': i === activeIdx ? `${CYCLE_MS}ms` : '0ms',
                  }}
                  onClick={() => goToIdx(i)}
                />
              ))}
            </div>

            {/* The cycling card */}
            <div className="hero-reel-stage">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeIdx}
                  className="hero-reel-card"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Type / badge */}
                  <div className="hero-reel-type-row">
                    <span
                      className="hero-reel-type"
                      style={{ color: highlight.accent }}
                    >
                      {highlight.type}
                    </span>
                    <span className="hero-reel-badge">{highlight.badge}</span>
                  </div>

                  {/* Title + subtitle */}
                  <h2 className="hero-reel-title" style={{ color: highlight.accent === '#c9a84c' ? 'var(--white)' : 'var(--white)' }}>
                    {highlight.title}
                  </h2>
                  <div className="hero-reel-subtitle">{highlight.subtitle}</div>

                  {/* Mockup window */}
                  <div className="hero-reel-mockup-wrap">
                    <div className="hero-reel-mockup-inner">
                      <Mockup type={highlight.mockupType} />
                    </div>
                    {/* Accent glow */}
                    <div
                      className="hero-reel-mockup-glow"
                      style={{ background: `${highlight.accent}18` }}
                    />
                  </div>

                  {/* Impact */}
                  <p className="hero-reel-impact">{highlight.impact}</p>

                  {/* Tags */}
                  <div className="hero-reel-tags">
                    {highlight.tags.map(t => (
                      <span
                        key={t}
                        className="hero-reel-tag"
                        style={{ borderColor: `${highlight.accent}30`, color: 'var(--gray-light)' }}
                      >
                        {t}
                      </span>
                    ))}
                    <span
                      className="hero-reel-stat-pill"
                      style={{ background: `${highlight.accent}15`, color: highlight.accent, borderColor: `${highlight.accent}35` }}
                    >
                      {highlight.stat.val} <span className="hero-reel-stat-sub">{highlight.stat.label}</span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom controls */}
            <div className="hero-reel-controls">
              <div className="hero-reel-dots">
                {HIGHLIGHTS.map((h, i) => (
                  <button
                    key={i}
                    className={`hero-reel-dot ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => goToIdx(i)}
                    style={i === activeIdx ? { background: highlight.accent, boxShadow: `0 0 8px ${highlight.accent}60` } : {}}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="hero-reel-counter">
                <span className="hero-reel-counter-cur"
                  style={{ color: highlight.accent }}
                >
                  {String(activeIdx + 1).padStart(2, '0')}
                </span>
                <span className="hero-reel-counter-sep">/</span>
                <span>{String(HIGHLIGHTS.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="hero-reel-corner hero-reel-corner--tl" style={{ borderColor: `${highlight.accent}50` }} />
          <div className="hero-reel-corner hero-reel-corner--br" style={{ borderColor: `${highlight.accent}50` }} />

          {/* Ambient glow behind panel */}
          <div className="hero-reel-ambient" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${highlight.accent}0e, transparent 70%)` }} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.7 }}
      >
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </motion.div>

      {/* Ticker */}
      <motion.div
        className="hero-ticker-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <div className="hero-ticker-track">
          <span className="hero-ticker-text">{TICKER_ITEMS}</span>
          <span className="hero-ticker-text" aria-hidden="true">{TICKER_ITEMS}</span>
        </div>
      </motion.div>
    </section>
  )
}
