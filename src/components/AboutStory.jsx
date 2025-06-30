const AboutStory = () => {
  return (
    <section className="about-story section section-alt">
      <div className="container">
        <div className="story-content">
          <div className="story-text">
            <h2 className="story-title animate-slide-in-left">
              Our Story
            </h2>
            <div className="story-paragraphs">
              <p className="animate-slide-in-left">
                Founded in 2018, myteam emerged from a simple yet powerful observation: 
                the world's best talent isn't confined to Silicon Valley or traditional 
                tech hubs. Exceptional professionals exist everywhere, but companies 
                struggled to find and integrate them effectively.
              </p>
              <p className="animate-slide-in-left">
                Our founders, having experienced firsthand the challenges of building 
                distributed teams at scale, set out to create a better way. We developed 
                a unique methodology that combines cutting-edge technology with deep 
                human insight to identify, vet, and integrate top-tier talent from 
                around the globe.
              </p>
              <p className="animate-slide-in-left">
                Today, we've helped over 200 companies build high-performing distributed 
                teams, from fast-growing startups to Fortune 500 enterprises. Our network 
                spans 50+ countries and includes professionals across every major 
                discipline and industry.
              </p>
            </div>
          </div>
          
          <div className="story-stats">
            <div className="stat-item animate-fade-in-up">
              <div className="stat-number">200+</div>
              <div className="stat-label">Companies Served</div>
            </div>
            <div className="stat-item animate-fade-in-up">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item animate-fade-in-up">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Professionals</div>
            </div>
            <div className="stat-item animate-fade-in-up">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-story {
          position: relative;
          overflow: hidden;
        }

        .about-story::before {
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

        .story-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .story-title {
          color: var(--text-white);
          margin-bottom: 40px;
        }

        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .story-paragraphs p {
          color: var(--text-gray);
          line-height: 1.7;
          font-size: 1.125rem;
        }

        .story-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .stat-item {
          text-align: center;
          padding: 24px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-4px);
          border-color: rgba(246, 126, 126, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-coral);
          margin-bottom: 8px;
        }

        .stat-label {
          color: var(--text-gray);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .story-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .story-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .story-content {
            gap: 40px;
          }

          .story-title {
            margin-bottom: 32px;
          }

          .story-paragraphs {
            gap: 20px;
          }

          .story-paragraphs p {
            font-size: 1rem;
          }

          .story-stats {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .stat-item {
            padding: 20px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutStory