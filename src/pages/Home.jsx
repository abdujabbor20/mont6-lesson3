import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import AboutValues from '../components/AboutValues'
import TeamSection from '../components/TeamSection'
import ClientsSection from '../components/ClientsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className="home">
      <section id="hero">
        <Hero />
      </section>
      
      <Features />
      <Testimonials />
      <CallToAction />
      
      <section id="about">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <TeamSection />
        <ClientsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

export default Home