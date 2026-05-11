import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../styles/contact.css';
import useIntersectionAnimation from '../../hooks/useIntersectionAnimation';

function ContactMe() {
  const [state, handleSubmit] = useForm('xzdojgpr');
  const [dismissed, setDismissed] = useState(false);

  useIntersectionAnimation('.contactForm');

  const handleDismiss = () => {
    setDismissed(true);
    // Trigger animation on the form
    setTimeout(() => {
      const form = document.querySelector('.contactForm');
      if (form) {
        form.classList.remove('leaving');
        form.classList.add('visible');
      }
    }, 0);
  };

  if (state.succeeded && !dismissed) {
    return (
      <section className="contact" id="contact" data-nav-section>
        <h1>Get In Touch</h1>
        <div className="successAlert">
          <div className="alertContent">
            <span className="alertIcon">✓</span>
            <p>Thank you! Your email has been sent successfully. I'll get back to you soon!</p>
            <button 
              className="dismissBtn" 
              onClick={handleDismiss}
              aria-label="Dismiss alert"
            >
              ✕
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contact" data-nav-section>
      <h1>Get In Touch</h1>
      <p className="contactSubtitle">Have a question or want to collaborate? Feel free to reach out!</p>
      
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError field="name" errors={state.errors} />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            required
          />
          <ValidationError field="email" errors={state.errors} />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows="5"
            required
          ></textarea>
          <ValidationError field="message" errors={state.errors} />
        </div>

        <button type="submit" className="submitBtn" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
