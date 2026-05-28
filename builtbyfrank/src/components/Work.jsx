import ltxImg from '../assets/ltx640.png'
import kirksImg from '../assets/kirks640.png'
import blystoneImg from '../assets/blystoneinsurance640.png'
import inforLogo from '../assets/infor-logo.png'
import deacomLogo from '../assets/deacom-logo.png'
import psuLogo from '../assets/psu-logo.png'
import styles from './Work.module.css'

const projects = [
  {
    title: 'LicenseTraxx',
    location: 'Arlington, VA',
    description:
      'Real estate licensing management solution. Track credits and license expirations.',
    responsibilities: 'Project management, system architecture, consultation, development, and design.',
    url: 'http://licensetraxx.com/',
    image: ltxImg,
    color: '#115AF4',
  },
  {
    title: 'Kirks Institute',
    location: 'Arlington, VA',
    description:
      'Real estate course e-commerce site. Schedule and pay for courses.',
    responsibilities: 'Project management, system architecture, consultation, development, and design.',
    url: 'http://kirksinstitute.com/',
    image: kirksImg,
    color: '#7c3aed',
  },
  {
    title: 'The Blystone Company',
    location: 'Hatfield, PA',
    description:
      'Insurance provider for the tri-state area, servicing commercial and residential needs.',
    responsibilities: 'Development, design, and technical support.',
    url: 'http://blystoneinsurance.com/',
    image: blystoneImg,
    color: '#0891b2',
  },
]

const employers = [
  { name: 'Penn State', url: 'http://www.psu.edu/', logo: psuLogo },
  { name: 'Infor', url: 'http://www.infor.com/', logo: inforLogo },
  { name: 'Deacom', url: 'http://www.deacom.com/', logo: deacomLogo },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.label}>Recent Work</div>
          <h2 className={styles.heading}>Projects that make<br /><span className={styles.accent}>a real difference</span></h2>
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
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardLocation}>{project.location}</span>
                  <svg className={styles.cardArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <p className={styles.cardResp}>
                  <span>Responsibilities:</span> {project.responsibilities}
                </p>
                <div className={styles.viewLink}>
                  View Project
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Prior Employers */}
        <div className={styles.employers}>
          <div className={styles.employersHeader}>
            <div className={styles.label}>Prior Employers</div>
          </div>
          <div className={styles.employersList}>
            {employers.map((emp) => (
              <a
                key={emp.name}
                href={emp.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.employer}
              >
                <img src={emp.logo} alt={emp.name} className={styles.employerLogo} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
