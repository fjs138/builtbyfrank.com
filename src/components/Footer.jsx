import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>F</span>
            <span className={styles.logoText}>Built by Frank</span>
          </div>
          <p className={styles.tagline}>
            Helping businesses deliver engaging web experiences.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <div className={styles.groupLabel}>Navigation</div>
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className={styles.linkGroup}>
            <div className={styles.groupLabel}>Connect</div>
            <a href="https://www.linkedin.com/in/franksantaguida/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://github.com/fjs138" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
            <a href="https://frankjs.net/" target="_blank" rel="noopener noreferrer" className={styles.link}>frankjs.net</a>
            <a href="/Frank_Santaguida_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Resume</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Frank Santaguida. All rights reserved.</span>
        <span className={styles.location}>Philadelphia, PA</span>
      </div>
    </footer>
  )
}
