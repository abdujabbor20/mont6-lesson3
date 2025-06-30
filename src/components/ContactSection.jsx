import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className="contact-section section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="animate-fade-in-up">Contact</h2>
            
            <div className="contact-items">
              <div className="contact-item animate-slide-in-left">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21M20 10H4V21C4 21.6 4.4 22 5 22H19C19.6 22 20 21.6 20 21V10Z"/>
                  </svg>
                </div>
                <div>
                  <h3>The quality of our talent network</h3>
                </div>
              </div>

              <div className="contact-item animate-slide-in-left">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                  </svg>
                </div>
                <div>
                  <h3>Usage & implementation of our software</h3>
                </div>
              </div>

              <div className="contact-item animate-slide-in-left">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                  </svg>
                </div>
                <div>
                  <h3>How we help drive innovation</h3>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.05) 10px,
            rgba(255, 255, 255, 0.05) 12px
          );
        }

        .contact-section::after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: 200px;
          width: 300px;
          height: 20px;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1) 6px,
            transparent 6px,
            transparent 18px
          );
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-info h2 {
          margin-bottom: 48px;
          color: var(--text-white);
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background-color: var(--accent-coral);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-white);
          flex-shrink: 0;
        }

        .contact-item h3 {
          color: var(--accent-coral);
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            gap: 40px;
          }

          .contact-info h2 {
            margin-bottom: 32px;
          }

          .contact-items {
            gap: 24px;
          }

          .contact-item {
            gap: 16px;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
          }

          .contact-item h3 {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactSection