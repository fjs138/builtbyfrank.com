import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.col}>
          <div className={styles.label}>About</div>
          <h2 className={styles.heading}>Building Relationships,<br />Empowering Businesses</h2>
          <p className={styles.body}>
            With a wealth of knowledge gained from working with both global corporations
            and local pet shop owners, your solution will be tailor fit.
          </p>
        </div>

        <div className={styles.cards}>
          {/* Education */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M3 9l9 5 9-5M3 14l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardLabel}>Education</div>
            <div className={styles.cardTitle}>The Pennsylvania State University</div>
            <div className={styles.cardSub}>B.S. in Information Sciences &amp; Technology</div>
          </div>

          {/* Experience */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styles.cardLabel}>Experience</div>
            <div className={styles.cardTitle}>Recent Work &amp; Prior Employers</div>
            <div className={styles.cardSub}>Penn State · Infor · Deacom</div>
          </div>

          {/* Resume CTA */}
          <a
            href="/Frank_Santaguida_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeCard}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            View Resume
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={styles.arrow}>
              <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
