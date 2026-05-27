import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const gridRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      gridRef.current.style.setProperty('--mouse-x', `${x}%`)
      gridRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.grid} ref={gridRef} />
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for new projects
        </div>

        <h1 className={styles.heading}>
          Hi, I'm Frank.
          <br />
          <span className={styles.headingAccent}>I build the web.</span>
        </h1>

        <p className={styles.subheading}>
          I help businesses deliver engaging web experiences — from discovery
          to launch and beyond. Tailor-fit solutions for companies of every size.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => handleScroll('#work')}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => handleScroll('#contact')}
          >
            Get in Touch
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
