import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Contactbar from '../components/Contactbar'

export default function About() {
    return (
        <section className='about' id="about">
            <AboutMe />
            <Experience />
            <Contactbar />
        </section>
    )
}
