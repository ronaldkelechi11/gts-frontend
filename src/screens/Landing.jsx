import About from "../components/Landing/About"
import CallToAction from "../components/Landing/CallToAction"
import Contact from "../components/Landing/Contact"
import Footer from "../components/Landing/Footer"
import Hero from "../components/Landing/Hero"
import Plans from "../components/Landing/Plans"
import Team from "../components/Landing/Team"


const Landing = () => {
    return (
        <div className='w-screen flex flex-col'>
            <Hero />
            <Plans />
            <About />
            <Team />
            <CallToAction />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
