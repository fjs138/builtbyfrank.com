import { useState, useEffect } from 'react'
import styles from './Testimonial.module.css'

const testimonials = [
  {
    quote:
      'I came to Frank when my company needed a more modern, professional website. Frank took the time to understand exactly what I wanted and offered suggestions that I had never considered. What I ended up with is far better than what I had initially imagined. Frank was responsive and helpful throughout the entire process and I continue to use him now for other services related to my website. He has my full endorsement.',
    name: 'John Blystone',
    location: 'Hatfield, PA',
    initials: 'JB',
  },
  {
    quote:
      'I came to Frank for help with the design of a CRM solution for a client. The client was pleased with the design so Frank went on to manage the project and deliver on the implementation.',
    name: 'Joe S.',
    location: 'Philadelphia, PA',
    initials: 'JS',
  },
  {
    quote:
      'Before finding Frank, it was seemingly impossible to find a developer who would keep his promises when it came to deadlines and budget constraints. I am glad that I no longer have to seek a web developer again!',
    name: 'Matthew Torrence',
    location: 'Norristown, PA',
    initials: 'MT',
  },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Testimonials</div>
        <h2 className={styles.heading}>What clients say</h2>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === active ? styles.cardActive : ''}`}
              onClick={() => setActive(i)}
            >
              <div className={styles.quoteMark}>&ldquo;</div>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.location}>{t.location}</div>
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.131L8 10.5l-3.708 2.083L5 8.452 2 5.528l4.146-.772L8 1z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
