import styles from './Services.module.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We gather your project requirements and discuss goals, pain points, and concerns. Together we define scope, then I deliver a timeline, strategy, and pricing for your review.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Creation',
    description:
      'This is where the magic happens. Your site is built and available privately for your review. We iterate together until the aesthetic and layout match your vision exactly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'We coordinate and launch your site for the world to see. I set up analytics, track growth indicators, and remain available for SEO improvements and ongoing maintenance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom websites built from scratch. Responsive, fast, and built to convert.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    description: 'Online stores that drive sales. Seamless checkout, inventory management, and more.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'SEO & Analytics',
    description: 'Get found. I optimize your site for search engines and set up tracking to measure growth.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: 'On-retainer support to keep your site secure, updated, and performing at its best.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Services</div>
          <h2 className={styles.heading}>
            Incredible results through
            <br />
            <span className={styles.accent}>collaborative process</span>
          </h2>
          <p className={styles.subheading}>
            Every project starts with a conversation. You'll be consulted at each stage,
            from initial concept to final launch.
          </p>
        </div>

        {/* Process steps */}
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepConnector}>
                <div className={styles.stepIconWrap}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.stepLine} />}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className={styles.serviceGrid}>
          {services.map((svc) => (
            <div key={svc.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{svc.icon}</div>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceDesc}>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
