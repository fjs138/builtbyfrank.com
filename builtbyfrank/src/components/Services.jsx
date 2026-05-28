import styles from './Services.module.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Here, we gather the requirements of your project and discuss your goals, pain points, and other concerns. Our objective is to define the scope of your project and what may be required to fulfill it. Then you will be provided a deliverable, showing a timeline, strategy, and pricing for your evaluation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Creation',
    description:
      'This is where the magic happens. Your site begins to be built and is available privately for your examination. You\'ll be able to know how things are progressing and together we can ensure your vision is seen made real. Once the general aesthetic and layout is to your liking, the rest of your content will be developed and populated.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Implementation & Beyond',
    description:
      'Once the project is completed, we\'ll coordinate and launch your site for the whole world to see! We can begin tracking metrics and indicators of growth and sales. Further services are available, such as SEO improvements, or on-retainer maintenance for your websites.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.label}>Services</div>
          <h2 className={styles.heading}>The Process</h2>
          <p className={styles.subheading}>
            Incredible results are the product of collaborative communication and planning.
            As we move forward with the project, you will be consulted during each stage.
            This starts with a call to see if Frank is the right fit for you.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepIconWrap}>
                  {step.icon}
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

        <div className={styles.cta}>
          <h3 className={styles.ctaHeading}>Building Relationships, Empowering Businesses</h3>
          <p className={styles.ctaBody}>
            With a wealth of knowledge gained from working with both global corporations
            and local pet shop owners, your solution will be tailor fit.
          </p>
          <button className={styles.ctaBtn} onClick={() => scrollTo('#contact')}>
            Contact
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
