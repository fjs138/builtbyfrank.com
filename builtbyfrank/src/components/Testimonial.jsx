import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.quoteWrap}>
          <div className={styles.quoteMark}>&ldquo;</div>
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
              <div className={styles.name}>John Blystone</div>
              <div className={styles.title}>Hatfield, PA</div>
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
      </div>
    </section>
  )
}
