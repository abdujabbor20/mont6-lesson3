const ClientsSection = () => {
  const clients = [
    { name: "The Verge", logo: "THE VERGE" },
    { name: "Jakarta Post", logo: "TheJakartaPost" },
    { name: "The Guardian", logo: "The Guardian" },
    { name: "Tech Radar", logo: "techradar" },
    { name: "Gadgets Now", logo: "GADGETS now" }
  ]

  return (
    <section className="clients section">
      <div className="container">
        <h2 className="clients-title animate-fade-in-up">Some of our clients</h2>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo animate-fade-in-up">
              <span>{client.logo}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clients {
          position: relative;
          overflow: hidden;
        }

        .clients::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100px;
          width: 200px;
          height: 200px;
          background: var(--primary-dark);
          border-radius: 50%;
          opacity: 0.3;
        }

        .clients::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
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

        .clients-title {
          text-align: center;
          color: var(--text-white);
          margin-bottom: 80px;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 48px;
          align-items: center;
        }

        .client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-gray);
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          padding: 24px;
          border-radius: 8px;
        }

        .client-logo:hover {
          color: var(--accent-coral);
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .clients-title {
            margin-bottom: 60px;
          }

          .clients-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 32px;
          }

          .client-logo {
            font-size: 1rem;
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .clients-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }

          .client-logo {
            font-size: 0.9rem;
            padding: 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default ClientsSection