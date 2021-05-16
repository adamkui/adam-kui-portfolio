import {FaGithub, FaFacebook} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Header() {
    return (
        <header className='header' id='header'>
            <div className='header__left'>
                <div className='header__logo' onClick={() => scroll.scrollToTop({duration: 400})}><p>Adam Kui</p></div>
                <div className='header__menu'>
                        <li className='header__menuItem' onClick={() => scroll.scrollToTop({duration: 400})}>Home</li>
                        <li className='header__menuItem'>
                            <Link to='about' smooth={true} duration={400} offset={-60}>About</Link>
                        </li>
                        <li className='header__menuItem'>
                            <Link to='portfolio' smooth={true} duration={400} offset={-60}>Projects</Link>
                        </li>
                        <li className='header__menuItem'>
                            <Link to='contact' smooth={true} duration={400} offset={-60}>Contact</Link>
                        </li>
                    </div>
            </div>

            <nav>
                <ul className='header__iconsList'>
                    <li>
                        <a href='https://github.com/adamkui' target='_blank' rel="noreferrer">
                            <FaGithub className='header__icon' />
                        </a> 
                    </li>
                    <li>
                        <a href='https://www.facebook.com/addam.kui/' target='_blank' rel="noreferrer">
                            <FaFacebook className='header__icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/adamkui/' target='_blank' rel="noreferrer">
                            <GrLinkedin className='header__icon' />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
