import {FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'

export default function About() {
    return (
        <section className='about' id="about">
            <AboutMe />
            <Experience />
            <div className='about__contactbar'>
                <p>Contact me on:</p>
                <a className='about__contactbaritem' href=""><FaLinkedin className='about__contacticon' />LinkedIn</a>
                <a className='about__contactbaritem' href=""><AiOutlineMail className='about__contacticon' />Gmail</a>
                <a className='about__contactbaritem' href=""><FaFacebookSquare className='about__contacticon' />Facebook</a>
            </div>
        </section>
    )
}
