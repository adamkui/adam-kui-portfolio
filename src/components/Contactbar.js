import {FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

export default function Contactbar() {
    return (
        <div className='about__contactbar'>
            <p>Contact me on:</p>
            <a className='about__contactbaritem' href="https://www.linkedin.com/in/adamkui/"><FaLinkedin className='about__contacticon' />LinkedIn</a>
            <a className='about__contactbaritem' href="mailto:addam.kui@gmail.com"><AiOutlineMail className='about__contacticon' />Gmail</a>
            <a className='about__contactbaritem' href="https://www.facebook.com/addam.kui/"><FaFacebookSquare className='about__contacticon' />Facebook</a>
        </div>
    )
}
