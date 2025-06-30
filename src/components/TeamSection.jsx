const TeamSection = () => {
  const directors = [
    {
      name: "Nikita Marks",
      position: "Founder & CEO",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Cristian Duncan",
      position: "Co-founder & COO",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Cruz Hamer",
      position: "Co-founder & CTO",
      avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Drake Heaton",
      position: "Business Development Lead",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Griffin Wise",
      position: "Lead Marketing",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Aden Allan",
      position: "Head of Talent",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <section className="team section section-alt">
      <div className="container">
        <h2 className="team-title animate-fade-in-up">Meet the directors</h2>
        
        <div className="team-grid">
          {directors.map((member, index) => (
            <div key={index} className="team-member animate-fade-in-up">
              <div className="member-card">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="member-avatar"
                />
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </div>
                <div className="member-social">
                  <a href={member.social.twitter} className="social-btn" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={member.social.linkedin} className="social-btn" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              {member.quote && (
                <div className="member-quote">
                  <p>"{member.quote}"</p>
                  <div className="quote-social">
                    <a href={member.social.twitter} className="quote-social-btn" aria-label="Twitter">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="quote-social-btn" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-title {
          text-align: center;
          color: var(--text-white);
          margin-bottom: 80px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
        }

        .team-member {
          position: relative;
        }

        .member-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 32px 24px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
          border-color: rgba(246, 126, 126, 0.3);
        }

        .member-avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 24px;
          border: 4px solid var(--accent-coral);
        }

        .member-name {
          color: var(--accent-coral);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .member-position {
          color: var(--text-gray);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        .member-social {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          background-color: var(--accent-coral);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-white);
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background-color: var(--accent-light);
          transform: translateY(-2px);
        }

        .member-quote {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--primary-teal);
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10;
          max-width: 300px;
          border: 2px solid var(--accent-coral);
        }

        .team-member:hover .member-quote {
          opacity: 1;
          visibility: visible;
        }

        .member-quote p {
          color: var(--text-white);
          font-style: italic;
          margin-bottom: 16px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .quote-social {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .quote-social-btn {
          width: 32px;
          height: 32px;
          background-color: var(--accent-coral);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-white);
          transition: all 0.3s ease;
        }

        .quote-social-btn:hover {
          background-color: var(--accent-light);
        }

        @media (max-width: 768px) {
          .team-title {
            margin-bottom: 60px;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
          }

          .member-card {
            padding: 24px 20px;
          }

          .member-avatar {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
          }

          .member-quote {
            position: static;
            transform: none;
            opacity: 1;
            visibility: visible;
            margin-top: 16px;
            max-width: none;
          }
        }
      `}</style>
    </section>
  )
}

export default TeamSection