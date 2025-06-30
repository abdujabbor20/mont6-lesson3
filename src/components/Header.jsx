import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="logo"
          >
            myteam
          </button>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <button 
              onClick={() => scrollToSection('hero')}
              className="nav-link"
            >
              home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              about
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              contact
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-outline"
          >
            contact us
          </button>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: var(--primary-teal);
          z-index: 1000;
          padding: 16px 0;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-white);
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: var(--text-white);
          font-weight: 500;
          padding: 8px 0;
          position: relative;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .nav-link:hover {
          color: var(--accent-coral);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu-toggle span {
          width: 24px;
          height: 2px;
          background-color: var(--text-white);
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--primary-dark);
            flex-direction: column;
            gap: 0;
            padding: 24px;
            transform: translateY(-100vh);
            transition: transform 0.3s ease;
          }

          .nav-menu-open {
            transform: translateY(0);
          }

          .nav-link {
            padding: 16px 0;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .btn {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header