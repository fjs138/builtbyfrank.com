import { useEffect, useRef } from 'react'
import cutbbf from '../assets/cutbbf.png'
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

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.grid} ref={gridRef} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.heading}>
            Hi, I'm Frank.
          </h1>
          <p className={styles.subheading}>
            I help businesses deliver engaging web experiences.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={() => scrollTo('#work')}>
              Explore
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryBtn} onClick={() => scrollTo('#contact')}>
              Contact
            </button>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <div className={styles.imageGlow} />
          <img
            src={cutbbf}
            alt="Frank Santaguida"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  )
}
