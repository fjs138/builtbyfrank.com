import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.quoteIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M9.333 20c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.37 0-.727.05-1.067.14C12.8 13.6 14.4 11.2 16 9.333L13.333 8C10.4 11.467 8 15.6 8 20h1.333zm13.334 0c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.37 0-.727.05-1.067.14C26.133 13.6 27.733 11.2 29.333 9.333L26.667 8C23.733 11.467 21.333 15.6 21.333 20h1.334z" fill="currentColor"/>
            </svg>
          </div>

          <blockquote className={styles.quote}>
            I came to Frank when my company needed a more modern, professional website.
            Frank took the time to understand exactly what I wanted and offered suggestions
            that I had never considered. What I ended up with is far better than what I had
            initially imagined. Frank was responsive and helpful throughout the entire process
            and I continue to use him now for other services related to my website.
            He has my full endorsement.
          </blockquote>

          <div className={styles.author}>
            <div className={styles.avatar}>JB</div>
            <div>
              <div className={styles.authorName}>John Blystone</div>
              <div className={styles.authorTitle}>Owner, Blystone / Ashmead Insurance · Hatfield, PA</div>
            </div>
          </div>

          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.131L8 10.5l-3.708 2.083L5 8.452 2 5.528l4.146-.772L8 1z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
