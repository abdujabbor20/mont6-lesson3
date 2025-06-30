const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              Find the best <span className="text-coral">talent</span>
            </h1>
            <p className="hero-description animate-fade-in-up">
              Finding the right people and building high performing teams can be hard. 
              Most companies aren't tapping into the abundance of global talent. We're 
              about to change that.
            </p>
          </div>
          <div className="hero-visual">
            <div className="geometric-shapes">
              <div className="shape-circle"></div>
              <div className="shape-pattern"></div>
              <div className="shape-lines"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 140px 0 80px;
          position: relative;
          background: linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-dark) 100%);
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-title {
          margin-bottom: 32px;
          color: var(--text-white);
        }

        .text-coral {
          color: var(--accent-coral);
        }

        .hero-description {
          color: var(--text-gray);
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .hero-visual {
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
          .hero-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-visual {
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
          .hero {
            padding: 100px 0 60px;
          }

          .hero-content {
            gap: 40px;
          }

          .hero-title {
            margin-bottom: 24px;
          }

          .hero-description {
            margin-bottom: 32px;
          }

          .hero-visual {
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

export default Hero