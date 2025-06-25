import LogoShowcase from "./sections/LogoShowcase"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <ShowCaseSection/>
        <LogoShowcase/>
        <FeatureCards/>
        <ExperienceSection/>
        <TechStack/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}
export default App