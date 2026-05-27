import styles from './Work.module.css'

const projects = [
  {
    title: 'LicenseTraxx',
    location: 'Arlington, VA',
    description:
      'Real estate licensing management solution. Track credits and license expirations across agents and brokerages.',
    tags: ['Project Management', 'Architecture', 'Development', 'Design'],
    url: 'http://licensetraxx.com/',
    color: '#115AF4',
  },
  {
    title: 'Kirks Institute',
    location: 'Arlington, VA',
    description:
      'Real estate course e-commerce platform. Schedule and pay for courses with a seamless booking experience.',
    tags: ['E-Commerce', 'Architecture', 'Development', 'Design'],
    url: 'http://kirksinstitute.com/',
    color: '#7c3aed',
  },
  {
    title: 'Blystone / Ashmead Insurance',
    location: 'Hatfield, PA',
    description:
      'Insurance provider for the tri-state area, servicing commercial and residential needs with a modern web presence.',
    tags: ['Development', 'Design', 'Technical Support'],
    url: 'http://blystoneinsurance.com/',
    color: '#0891b2',
  },
]

const employers = [
  { name: 'Penn State', url: 'http://www.psu.edu/' },
  { name: 'Infor', url: 'http://www.infor.com/' },
  { name: 'Deacom', url: 'http://www.deacom.com/' },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Recent Work</div>
          <h2 className={styles.heading}>
            Projects that make
            <br />
            <span className={styles.accent}>a real difference</span>
          </h2>
          <p className={styles.subheading}>
            A selection of client work spanning e-commerce, SaaS, and professional services.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ '--accent': project.color }}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardGlow} />
                <div className={styles.cardMeta}>
                  <span className={styles.cardLocation}>{project.location}</span>
                  <svg className={styles.cardArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
              <div className={styles.cardTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Prior employers */}
        <div className={styles.employers}>
          <div className={styles.employersLabel}>Prior Employers</div>
          <div className={styles.employersList}>
            {employers.map((emp) => (
              <a
                key={emp.name}
                href={emp.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.employer}
              >
                {emp.name}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
