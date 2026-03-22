import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Mockup from './Mockup'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

/* ─── Project data ──────────────────────────────────────────────── */
const projects = [
  {
    id: 'packd',
    num: '01',
    mockupType: 'packd',
    category: 'Fitness · Social · Community',
    name: 'PACKD',
    tagline: 'One-stop community platform for fitness freaks & sports lovers',
    story:
      'A full-stack fitness community platform connecting athletes, tracking workouts, and building sports communities. React frontend with social features, real-time interactions, and a mobile companion app in TypeScript.',
    features: [
      'Real-time community feed & social interactions',
      'Workout tracking with rich activity stats',
      'TypeScript mobile companion app',
      'Community challenges & leaderboards',
    ],
    tags: ['React', 'JavaScript', 'TypeScript', 'Community Platform'],
    url: 'https://packd-lovat.vercel.app',
    github: 'https://github.com/mayank29deo/PACKD',
    featured: true,
    badge: 'Most Active',
  },
  {
    id: 'kisansaathi',
    num: '02',
    mockupType: 'kisansaathi',
    category: 'AI · AgriTech · Bilingual',
    name: 'KISAN SAATHI',
    tagline: 'AI-powered bilingual agritech platform for Indian farmers',
    story:
      'Built a bilingual (English/Hindi) agriculture platform enabling farmers to access mandi prices, crop advisories, and sell produce via Hyperpure, Amazon Seller, and eNAM. Integrated TensorFlow.js AI module for crop disease detection from leaf images.',
    features: [
      'TensorFlow.js AI crop disease detection',
      'Live mandi prices across Indian markets',
      'Multi-platform selling integration (Hyperpure, eNAM)',
      'Full bilingual English + Hindi interface',
    ],
    tags: ['React', 'Vite', 'TensorFlow.js', 'React Native Web', 'Vercel'],
    url: 'https://kisan-saathi-dun.vercel.app',
    github: 'https://github.com/mayank29deo/KisanSaathi',
    featured: true,
    badge: 'Featured',
  },
  {
    id: 'stockd',
    num: '03',
    mockupType: 'stockd',
    category: 'FinTech · Analytics · Python',
    name: 'STOCKD',
    tagline: 'One-stop platform for Indian stock market analysis & recommendations',
    story:
      'Full-featured Indian stock market platform with real-time quotes, index tracking, mini sparkline charts, watchlist management, and AI-powered recommendations. Built with React + Vite frontend and a Python FastAPI backend.',
    features: [
      'Real-time NSE/BSE quotes & index tracking',
      'FastAPI Python backend with Yahoo Finance',
      'Mini sparkline charts for all stocks',
      'AI-powered buy/sell recommendations',
    ],
    tags: ['React', 'Vite', 'Python', 'FastAPI', 'Yahoo Finance API'],
    url: 'https://stockd-eosin.vercel.app',
    github: 'https://github.com/mayank29deo/stockd',
    featured: true,
    badge: 'Live',
  },
  {
    id: 'stock-intel',
    num: '04',
    mockupType: 'stock-intel',
    category: 'Finance · Data · Visualization',
    name: 'STOCK INTEL',
    tagline: 'Tells pretty much everything about your favourite stocks',
    story:
      'Deep-dive stock intelligence tool providing fundamentals, technicals, price history charts, and sentiment analysis for any listed stock. Clean, data-rich interface built for investors who want the full picture.',
    features: [
      'Comprehensive stock fundamentals dashboard',
      'Interactive price history & technical charts',
      'Sentiment analysis from news & social signals',
      'Peer comparison & sector benchmarking',
    ],
    tags: ['JavaScript', 'Stock APIs', 'Data Visualization', 'Canvas'],
    url: 'https://stock-intel-ten.vercel.app',
    github: 'https://github.com/mayank29deo/Stock-Intel',
    featured: false,
    badge: null,
  },
  {
    id: 'resume-portfolio',
    num: '05',
    mockupType: 'resume-portfolio',
    category: 'AI · TypeScript · Tooling',
    name: 'RESUME → PORTFOLIO',
    tagline: 'Converts any PDF/DOCX résumé into a full-fledged portfolio website',
    story:
      'AI-powered tool that takes a résumé file and generates a fully functional, deployable portfolio website. Built with TypeScript, leveraging document parsing and LLM-based content extraction to produce clean, production-ready React code.',
    features: [
      'PDF/DOCX upload & intelligent parsing',
      'LLM-powered section extraction',
      'Auto-generates deployable React portfolio',
      'One-click Vercel deployment flow',
    ],
    tags: ['TypeScript', 'AI', 'Document Parsing', 'Vite', 'React'],
    url: 'https://resume-to-portfolio-website.vercel.app',
    github: 'https://github.com/mayank29deo/resume_to_portfolio_website',
    featured: false,
    badge: null,
  },
  {
    id: 'diwali-analysis',
    num: '06',
    mockupType: 'diwali-analysis',
    category: 'Data Science · Python · BI',
    name: 'DIWALI SALES ANALYSIS',
    tagline: 'Python data science — customer segments, regional trends & insights',
    story:
      'Comprehensive Python data analysis of Diwali sales data using Pandas, NumPy, Matplotlib & Seaborn to identify key customer segments, top-selling products, and regional trends. Includes Power BI visual reports.',
    features: [
      'Customer segmentation by gender, age & region',
      'Top product categories by revenue analysis',
      'Pandas + NumPy data pipeline with Seaborn charts',
      'Power BI executive summary dashboard',
    ],
    tags: ['Python', 'Pandas', 'Seaborn', 'Jupyter Notebook', 'Power BI'],
    url: null,
    github: 'https://github.com/mayank29deo/Diwali-Sales-Analysis',
    featured: false,
    badge: 'Data Science',
  },
]

/* ─── Single project scene ──────────────────────────────────────── */
function ProjectScene({ project, index }) {
  const isEven = index % 2 === 0 /* even → text left, mockup right */

  return (
    <div
      className={`proj-scene ${isEven ? 'proj-scene--ltr' : 'proj-scene--rtl'}`}
      data-scene
    >
      {/* Giant dim background number */}
      <div className="proj-scene-num" data-scene-num>
        {project.num}
      </div>

      {/* Left / Right panels */}
      <div className="proj-scene-text" data-scene-text>
        {project.featured && (
          <div className="proj-scene-badge">
            ★ FEATURED
          </div>
        )}
        {project.badge && !project.featured && (
          <div className="proj-scene-badge proj-scene-badge--dim">
            {project.badge}
          </div>
        )}

        <div className="proj-scene-category" data-scene-category>
          {project.category}
        </div>

        <h3 className="proj-scene-name" data-scene-title>
          {project.name}
        </h3>

        <p className="proj-scene-tagline" data-scene-story>
          {project.tagline}
        </p>

        <p className="proj-scene-story" data-scene-story>
          {project.story}
        </p>

        <ul className="proj-scene-features" data-scene-features>
          {project.features.map((f, i) => (
            <li key={i} className="proj-scene-feature">
              <span className="proj-scene-feature-dot" />
              {f}
            </li>
          ))}
        </ul>

        <div className="proj-scene-tags" data-scene-tags>
          {project.tags.map(t => (
            <span key={t} className="proj-scene-tag">{t}</span>
          ))}
        </div>

        <div className="proj-scene-links" data-scene-links>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="proj-scene-link"
            data-hover
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View Code
          </a>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="proj-scene-link proj-scene-link--live"
              data-hover
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Mockup side */}
      <div className="proj-scene-mockup" data-scene-mockup>
        <Mockup type={project.mockupType} />
      </div>
    </div>
  )
}

/* ─── Main component ────────────────────────────────────────────── */
export default function Projects() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  useGSAP(
    () => {
      const scenes = gsap.utils.toArray('[data-scene]', containerRef.current)

      scenes.forEach(scene => {
        const num     = scene.querySelector('[data-scene-num]')
        const text    = scene.querySelector('[data-scene-text]')
        const mockup  = scene.querySelector('[data-scene-mockup]')
        const cat     = scene.querySelector('[data-scene-category]')
        const title   = scene.querySelector('[data-scene-title]')
        const stories = scene.querySelectorAll('[data-scene-story]')
        const feats   = scene.querySelectorAll('.proj-scene-feature')
        const tags    = scene.querySelector('[data-scene-tags]')
        const links   = scene.querySelector('[data-scene-links]')

        const isRtl = scene.classList.contains('proj-scene--rtl')

        /* Set initial states */
        gsap.set(num,    { scale: 1.3, opacity: 0 })
        gsap.set(text,   { x: isRtl ? 80 : -80, opacity: 0 })
        gsap.set(mockup, { x: isRtl ? -80 : 80, opacity: 0 })
        if (cat)   gsap.set(cat,   { opacity: 0, y: 12 })
        if (title) gsap.set(title, { opacity: 0, y: 20 })
        if (stories.length) gsap.set(stories, { opacity: 0, y: 16 })
        if (feats.length)   gsap.set(feats,   { opacity: 0, x: -12 })
        if (tags)  gsap.set(tags,  { opacity: 0 })
        if (links) gsap.set(links, { opacity: 0, y: 10 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: 'top 75%',
            once: true,
          },
        })

        tl.to(num, { scale: 1, opacity: 0.035, duration: 0.9, ease: 'power3.out' })
          .to(
            [text, mockup],
            { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.06 },
            '-=0.5'
          )
          .to(cat,    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
          .to(title,  { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.35')
          .to(stories,{ opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }, '-=0.3')
          .to(feats,  { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', stagger: 0.07 }, '-=0.2')
          .to(tags,   { opacity: 1, duration: 0.4 }, '-=0.15')
          .to(links,  { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      })
    },
    { scope: containerRef }
  )

  return (
    <section id="projects" className="projects-section">
      {/* Section header */}
      <div className="proj-header-wrap" ref={headerRef}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          03 / The Work
        </motion.span>

        <motion.h2
          className="section-title proj-header-title"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          19 REPOS.<br /><span>REAL PRODUCTS.</span>
        </motion.h2>

        <motion.p
          className="proj-header-sub"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Not tutorials. Not clones.<br />
          Built to solve real problems and shipped to production.
        </motion.p>

        <div className="divider" />
      </div>

      {/* Scenes */}
      <div ref={containerRef} className="proj-scenes">
        {projects.map((p, i) => (
          <ProjectScene key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* GitHub banner */}
      <div className="proj-github-wrap">
        <motion.div
          className="proj-github-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="proj-github-text">
            <span className="proj-github-label">See all 19 repos on GitHub</span>
            <span className="proj-github-sub">
              Including RCA automation tools, quick-commerce sites, data science notebooks, and more
            </span>
          </div>
          <a
            href="https://github.com/mayank29deo"
            target="_blank"
            rel="noreferrer"
            className="proj-github-btn"
            data-hover
          >
            github.com/mayank29deo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
