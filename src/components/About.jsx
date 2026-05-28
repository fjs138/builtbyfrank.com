import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.content}>
          <div className={styles.label}>About</div>
          <h2 className={styles.heading}>
            About Frank
          </h2>
          <p className={styles.body}>
            With a wealth of knowledge gained from working with both global corporations
            and local pet shop owners, your solution will be tailor fit.
          </p>

          <div className={styles.eduExp}>
            <div className={styles.block}>
              <div className={styles.blockLabel}>Education</div>
              <div className={styles.blockTitle}>The Pennsylvania State University</div>
              <div className={styles.blockSub}>B.S. in Information Sciences &amp; Technology</div>
            </div>

            <div className={styles.divider} />

            <div className={styles.block}>
              <div className={styles.blockLabel}>Experience</div>
              <div className={styles.blockLinks}>
                <a href="#work" className={styles.blockLink} onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}>Client Work</a>
                <span className={styles.dot}>·</span>
                <a href="#work" className={styles.blockLink} onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}>Previous Employers</a>
              </div>
            </div>
          </div>

          <a
            href="/Frank_Santaguida_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Resume
          </a>
        </div>

      </div>
    </section>
  )
}
