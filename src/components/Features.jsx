const Features = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21M20 10H4V21C4 21.6 4.4 22 5 22H19C19.6 22 20 21.6 20 21V10Z"/>
        </svg>
      ),
      title: "Experienced Individuals",
      description: "Our network is made up of highly experienced professionals who are passionate about what they do."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      title: "Easy to Implement",
      description: "Our processes have been refined over years of implementation meaning our teams always deliver."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      ),
      title: "Enhanced Productivity",
      description: "Our customized platform with in-built analytics helps you manage your distributed teams."
    }
  ]

  return (
    <section className="features section section-alt">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="features-title animate-slide-in-left">
              Build & manage distributed teams like no one else.
            </h2>
          </div>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item animate-slide-in-right">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .features {
          position: relative;
          overflow: hidden;
        }

        .features::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
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

        .features::after {
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

        .features-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .features-title {
          color: var(--text-white);
          max-width: 400px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background-color: var(--accent-coral);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-dark);
          flex-shrink: 0;
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          color: var(--accent-coral);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .feature-description {
          color: var(--text-gray);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .features-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .features-title {
            text-align: center;
            max-width: none;
          }
        }

        @media (max-width: 768px) {
          .features-content {
            gap: 40px;
          }

          .features-list {
            gap: 32px;
          }

          .feature-item {
            gap: 16px;
          }

          .feature-icon {
            width: 48px;
            height: 48px;
          }

          .feature-title {
            font-size: 1rem;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </section>
  )
}

export default Features