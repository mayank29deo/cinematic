import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Intro.css'

/* Word-by-word staggered reveal */
function WordReveal({ words, className, delay = 0, stagger = 0.18 }) {
  return (
    <div className={className} aria-label={words.join(' ')}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.18em' }}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: delay + i * stagger, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

/* phases: black → identity → name → fade */
export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState('black')
  const [showSkip, setShowSkip] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('identity'), 500),
      setTimeout(() => setPhase('name'),     3200),
      setTimeout(() => setPhase('fade'),     5800),
      setTimeout(() => onComplete(),         6600),
      setTimeout(() => setShowSkip(true),    800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="intro"
          animate={{ opacity: phase === 'fade' ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => { if (phase === 'fade') setPhase('done') }}
        >
          {/* Scan lines */}
          <div className="intro-scanlines" />

          {/* Corner brackets */}
          <div className="intro-corner intro-corner--tl" />
          <div className="intro-corner intro-corner--tr" />
          <div className="intro-corner intro-corner--bl" />
          <div className="intro-corner intro-corner--br" />

          {/* ── PHASE 1: Identity Statement ────────────────────── */}
          <AnimatePresence mode="wait">
            {phase === 'identity' && (
              <motion.div
                key="identity"
                className="intro-identity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.45 }}
              >
                {/* Tag */}
                <motion.div
                  className="intro-id-tag"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                >
                  <span className="intro-id-tag-line" />
                  MEET MAYANK NARAYAN
                </motion.div>

                {/* Three identity lines */}
                <WordReveal words={['PRODUCT', 'BUILDER.']}  className="intro-id-line intro-id-line--1" delay={0.3}  stagger={0.22} />
                <WordReveal words={['MARKET',  'THINKER.']}  className="intro-id-line intro-id-line--2" delay={0.85} stagger={0.22} />
                <WordReveal words={['ENGINEERING', 'ROOTS.']} className="intro-id-line intro-id-line--3" delay={1.4}  stagger={0.22} />

                {/* Punchy one-liner */}
                <motion.p
                  className="intro-id-sub"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.7 }}
                >
                  The rare engineer who builds for markets — not just machines.
                </motion.p>
              </motion.div>
            )}

            {/* ── PHASE 2: Massive Name Reveal ─────────────────── */}
            {phase === 'name' && (
              <motion.div
                key="name"
                className="intro-name-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Gold flash on entry */}
                <motion.div
                  className="intro-glitch-flash"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />

                <motion.div
                  className="intro-presenting"
                  initial={{ opacity: 0, letterSpacing: '0.9em' }}
                  animate={{ opacity: 1, letterSpacing: '0.5em' }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                >
                  PRESENTING
                </motion.div>

                {/* Giant name */}
                <div className="intro-name-block">
                  <motion.div
                    className="intro-name-first"
                    initial={{ opacity: 0, x: -60, filter: 'blur(14px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    MAYANK
                  </motion.div>
                  <motion.div
                    className="intro-name-last"
                    initial={{ opacity: 0, x: 60, filter: 'blur(14px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.38, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    NARAYAN
                  </motion.div>
                </div>

                {/* Gold rule */}
                <motion.div
                  className="intro-name-rule"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.55, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Tagline — who he is in one sentence */}
                <motion.p
                  className="intro-tagline"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.75 }}
                >
                  He integrates technical frameworks with market understanding —<br />
                  building products that don't just work.{' '}
                  <em>They&nbsp;scale.</em>
                </motion.p>

                {/* Meta strip */}
                <motion.div
                  className="intro-meta-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <span>EEE · BIT Mesra</span>
                  <span className="intro-meta-sep">◆</span>
                  <span>SAIL · Biryani In Cage</span>
                  <span className="intro-meta-sep">◆</span>
                  <span>Class of 2026</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom strip */}
          <motion.div
            className="intro-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="intro-bottom-text">EST. 2003 · DEOGHAR, JHARKHAND</span>
            <span className="intro-bottom-text">PORTFOLIO 2026</span>
          </motion.div>

          {/* Skip */}
          {showSkip && (
            <motion.button
              className="intro-skip"
              onClick={onComplete}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              data-hover
            >
              SKIP INTRO
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
