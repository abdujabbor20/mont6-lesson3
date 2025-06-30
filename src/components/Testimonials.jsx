const Testimonials = () => {
  const testimonials = [
    {
      quote: "The team perfectly fit the specialized skill set required. They focused on the most essential things during the initial phase.",
      author: "Kady Baker",
      position: "Product Manager at Bookmark",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "We needed to automate our entire onboarding process. The team came in and built our entire solution in a month.",
      author: "Aiysha Reese",
      position: "Founder of Manage",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "Amazing. Our team helped us build an app that delivered a new experience for hiring a photographer.",
      author: "Arthur Clarke",
      position: "Co-founder of MyPhotoApp",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-content">
          <h2 className="testimonials-title animate-fade-in-up">
            Delivering real results for top companies. Some of our{' '}
            <span className="text-coral">success stories.</span>
          </h2>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card animate-fade-in-up">
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          position: relative;
          overflow: hidden;
        }

        .testimonials::before {
          content: '';
          position: absolute;
          top: 50px;
          left: -50px;
          width: 150px;
          height: 150px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(255, 255, 255, 0.08) 8px,
            rgba(255, 255, 255, 0.08) 10px
          );
        }

        .testimonials::after {
          content: '';
          position: absolute;
          bottom: 100px;
          right: -50px;
          width: 200px;
          height: 25px;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.12) 5px,
            transparent 5px,
            transparent 15px
          );
        }

        .testimonials-content {
          text-align: center;
        }

        .testimonials-title {
          color: var(--text-white);
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .text-coral {
          color: var(--accent-coral);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 80px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 40px 32px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-align: left;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
          border-color: rgba(246, 126, 126, 0.3);
        }

        .testimonial-quote {
          color: var(--text-white);
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 32px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-coral);
        }

        .author-name {
          color: var(--accent-coral);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .author-position {
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .testimonials-title {
            margin-bottom: 60px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 60px;
          }

          .testimonial-card {
            padding: 32px 24px;
          }

          .testimonial-quote {
            font-size: 1rem;
            margin-bottom: 24px;
          }

          .author-avatar {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials