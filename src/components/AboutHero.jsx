const AboutHero = () => {
  return (
    <section className="about-hero section">
      <div className="container">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title animate-fade-in-up">
              About <span className="text-coral">myteam</span>
            </h1>
            <p className="about-hero-description animate-fade-in-up">
              We help companies build dynamic teams made up of top global talent. Using our 
              network of passionate professionals we drive innovation and deliver incredible 
              outcomes. Talented, diverse teams shape the best products and experiences. 
              We'll bring those teams to you.
            </p>
          </div>
          <div className="about-hero-visual">
            <div className="geometric-shapes">
              <div className="shape-circle"></div>
              <div className="shape-pattern"></div>
              <div className="shape-lines"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          padding: 140px 0 80px;
          position: relative;
          background: linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-dark) 100%);
          overflow: hidden;
        }

        .about-hero-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
        }

        .about-hero-text {
          max-width: 600px;
        }

        .about-hero-title {
          margin-bottom: 32px;
          color: var(--text-white);
        }

        .text-coral {
          color: var(--accent-coral);
        }

        .about-hero-description {
          color: var(--text-gray);
          font-size: 1.125rem;
          line-height: 1.7;
        }

        .about-hero-visual {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .geometric-shapes {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .shape-circle {
          position: absolute;
          top: 50px;
          right: 0;
          width: 200px;
          height: 200px;
          background: var(--accent-coral);
          border-radius: 50%;
          opacity: 0.8;
        }

        .shape-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            var(--text-white) 8px,
            var(--text-white) 10px
          );
          opacity: 0.15;
        }

        .shape-lines {
          position: absolute;
          bottom: 0;
          right: 100px;
          width: 150px;
          height: 20px;
          background: repeating-linear-gradient(
            90deg,
            var(--text-white),
            var(--text-white) 4px,
            transparent 4px,
            transparent 12px
          );
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .about-hero-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .about-hero-visual {
            width: 250px;
            height: 250px;
            margin: 0 auto;
          }

          .shape-circle {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 100px 0 60px;
          }

          .about-hero-content {
            gap: 40px;
          }

          .about-hero-title {
            margin-bottom: 24px;
          }

          .about-hero-visual {
            width: 200px;
            height: 200px;
          }

          .shape-circle {
            width: 120px;
            height: 120px;
          }

          .shape-pattern {
            width: 80px;
            height: 80px;
          }

          .shape-lines {
            width: 100px;
            height: 15px;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutHero