import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission — wire up to a real backend/Formspree/EmailJS as needed
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.label}>Contact</div>
          <h2 className={styles.heading}>
            Let's build something
            <br />
            <span className={styles.accent}>great together</span>
          </h2>
          <p className={styles.body}>
            Ready to start a project or just want to chat? Reach out and I'll
            get back to you within one business day.
          </p>

          <div className={styles.contactInfo}>
            <a href="tel:+12679778356" className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>(267) 977-8356</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/franksantaguida/" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>LinkedIn</div>
                <div className={styles.infoValue}>franksantaguida</div>
              </div>
            </a>

            <a href="https://github.com/fjs138" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>GitHub</div>
                <div className={styles.infoValue}>fjs138</div>
              </div>
            </a>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Location</div>
                <div className={styles.infoValue}>Philadelphia, PA 19145</div>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {status === 'sent' ? (
            <div className={styles.successMsg}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#22c55e" strokeWidth="2"/>
                <path d="M12 20l6 6 10-12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll be in touch soon.</p>
              <button type="button" className={styles.resetBtn} onClick={() => setStatus(null)}>
                Send another
              </button>
            </div>
          ) : (
            <>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
