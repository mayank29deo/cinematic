import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const checkHover = (e) => {
      const el = e.target
      const hoverable = el.closest('a, button, [data-hover]')
      isHovering.current = !!hoverable
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
        ringRef.current.style.width = isHovering.current ? '56px' : '36px'
        ringRef.current.style.height = isHovering.current ? '56px' : '36px'
        ringRef.current.style.borderColor = isHovering.current
          ? 'var(--gold)'
          : 'rgba(201,168,76,0.5)'
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkHover)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkHover)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
