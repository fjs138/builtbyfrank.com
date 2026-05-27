import styles from './About.module.css'

const skills = [
  'React', 'Node.js', 'TypeScript', 'WordPress',
  'PostgreSQL', 'AWS', 'UI/UX Design', 'SEO',
  'System Architecture', 'Project Management',
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.label}>About</div>
          <h2 className={styles.heading}>
            Developer. Designer.
            <br />
            <span className={styles.accent}>Problem Solver.</span>
          </h2>
          <p className={styles.body}>
            With a background in Information Sciences & Technology from Penn State
            and years of experience across global corporations and local businesses,
            I bring a full-stack perspective to every project.
          </p>
          <p className={styles.body}>
            I've worked with companies like Infor and Deacom, and I've helped
            small business owners build their digital presence from the ground up.
            Every solution is tailor-fit — no templates, no shortcuts.
          </p>

          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>

          <a
            href="/Frank_Santaguida_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M3 9l9 5 9-5M3 14l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Education</div>
            <div className={styles.cardSchool}>Penn State University</div>
            <div className={styles.cardDegree}>B.S. Information Sciences & Technology</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Experience</div>
            <div className={styles.cardEmployers}>
              <span>Infor</span>
              <span>Deacom</span>
              <span>Penn State</span>
            </div>
            <div className={styles.cardDegree}>Enterprise & Freelance</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M17.5 19H9a7 7 0 110-14h8.5a4.5 4.5 0 010 9H9a2 2 0 010-4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Location</div>
            <div className={styles.cardSchool}>Philadelphia, PA</div>
            <div className={styles.cardDegree}>Available remotely worldwide</div>
          </div>
        </div>
      </div>
    </section>
  )
}
