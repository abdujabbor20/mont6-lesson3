import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="cta section section-coral">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title animate-fade-in-up">
            Ready to get started?
          </h2>
          <Link to="/contact" className="btn btn-outline animate-fade-in-up">
            contact us
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cta {
          position: relative;
          overflow: hidden;
        }

        .cta::before {
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

        .cta::after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(255, 255, 255, 0.1) 8px,
            rgba(255, 255, 255, 0.1) 10px
          );
        }

        .cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .cta-title {
          color: var(--primary-dark);
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin: 0;
        }

        .btn-outline {
          color: var(--primary-dark);
          border-color: var(--primary-dark);
          flex-shrink: 0;
        }

        .btn-outline:hover {
          background-color: var(--primary-dark);
          color: var(--text-white);
        }

        @media (max-width: 768px) {
          .cta-content {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  )
}

export default CallToAction