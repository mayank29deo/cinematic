import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Nav.css'

const links = [
  { label: 'Story', href: '#about' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <a href="#hero" className="nav-logo" data-hover>
        <span className="nav-logo-m">M</span>
        <span className="nav-logo-n">N</span>
      </a>

      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav-link" data-hover>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://www.linkedin.com/in/mayank-narayan-a61500228/"
        target="_blank"
        rel="noreferrer"
        className="nav-cta"
        data-hover
      >
        Hire Me
      </a>

      <button
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        data-hover
        aria-label="menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <motion.div
          className="nav-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
              data-hover
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
