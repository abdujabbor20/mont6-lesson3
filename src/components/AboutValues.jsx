const AboutValues = () => {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      title: "Excellence",
      description: "We pursue excellence in everything we do, from the talent we source to the solutions we deliver. Our commitment to quality is unwavering."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
        </svg>
      ),
      title: "Transparency",
      description: "We believe in open, honest communication. Our clients always know where they stand and what to expect from our partnership."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 12C10.2 12 12 13.8 12 16C12 18.2 10.2 20 8 20C5.8 20 4 18.2 4 16C4 13.8 5.8 12 8 12Z"/>
        </svg>
      ),
      title: "Diversity",
      description: "We celebrate diversity in all its forms. Different perspectives, backgrounds, and experiences make teams stronger and more innovative."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12L12 7V10H8V14H12V17L17 12Z"/>
        </svg>
      ),
      title: "Innovation",
      description: "We continuously evolve our processes and technology to stay ahead of industry trends and deliver cutting-edge solutions."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21M20 10H4V21C4 21.6 4.4 22 5 22H19C19.6 22 20 21.6 20 21V10Z"/>
        </svg>
      ),
      title: "Partnership",
      description: "We don't just provide services; we become true partners in our clients' success, invested in their long-term growth and achievements."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
        </svg>
      ),
      title: "Integrity",
      description: "We operate with the highest ethical standards, building trust through consistent, reliable, and honest business practices."
    }
  ]

  return (
    <section className="about-values section">
      <div className="container">
        <div className="values-header">
          <h2 className="values-title animate-fade-in-up">Our Values</h2>
          <p className="values-subtitle animate-fade-in-up">
            These core principles guide everything we do and shape how we work with our clients and talent network.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item animate-fade-in-up">
              <div className="value-icon">
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-values {
          background-color: var(--primary-teal);
          position: relative;
          overflow: hidden;
        }

        .about-values::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 200px;
          height: 200px;
          background: var(--primary-dark);
          border-radius: 50%;
          opacity: 0.3;
        }

        .about-values::after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 150px;
          height: 25px;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1) 6px,
            transparent 6px,
            transparent 18px
          );
        }

        .values-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .values-title {
          color: var(--text-white);
          margin-bottom: 24px;
        }

        .values-subtitle {
          color: var(--text-gray);
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .value-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 40px 32px;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .value-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
          border-color: rgba(246, 126, 126, 0.3);
        }

        .value-icon {
          width: 64px;
          height: 64px;
          background-color: var(--accent-coral);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-white);
          margin: 0 auto 24px;
        }

        .value-title {
          color: var(--accent-coral);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .value-description {
          color: var(--text-gray);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .values-header {
            margin-bottom: 60px;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .value-item {
            padding: 32px 24px;
          }

          .value-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 20px;
          }

          .value-title {
            font-size: 1.125rem;
            margin-bottom: 12px;
          }

          .value-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutValues