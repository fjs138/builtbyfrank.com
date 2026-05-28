import { useForm, ValidationError } from '@formspree/react'
import styles from './Contact.module.css'

export default function Contact() {
  const [state, handleSubmit] = useForm('mvzyddgp')

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.content}>
          <div className={styles.label}>Contact</div>
          <h2 className={styles.heading}>Let's work together</h2>
          <p className={styles.body}>
            Ready to start a project? Reach out and I'll get back to you promptly.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className={styles.itemLabel}>Phone</div>
                <a href="tel:+12679778356" className={styles.itemValue}>(267) 977-8356</a>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className={styles.itemLabel}>Location</div>
                <div className={styles.itemValue}>Philadelphia, PA 19145</div>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/franksantaguida/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
            <a href="https://github.com/fjs138" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://frankjs.net/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="frankjs.net">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {state.succeeded ? (
            <div className={styles.success}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="21" stroke="#22c55e" strokeWidth="2"/>
                <path d="M13 22l7 7 11-14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Name</label>
                <input id="name" name="name" type="text" className={styles.input} placeholder="Your name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.fieldError} />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" className={styles.input} placeholder="your@email.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.fieldError} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" className={styles.input} placeholder="(555) 555-5555" />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="looking_for">What Are You Looking For?</label>
                <input id="looking_for" name="looking_for" type="text" className={styles.input} placeholder="e.g. New website, redesign, SEO..." />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="message">Message</label>
                <textarea id="message" name="message" className={`${styles.input} ${styles.textarea}`} placeholder="Tell me about your project..." rows={4} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.fieldError} />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={state.submitting}>
                {state.submitting ? (
                  <><span className={styles.spinner} /> Sending...</>
                ) : (
                  <>
                    Send
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </>
          )}
        </form>

      </div>
    </section>
  )
}
