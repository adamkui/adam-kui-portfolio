import { Link, animateScroll as scroll } from 'react-scroll'
import { IoIosArrowDropup } from 'react-icons/io'

export default function Footer() {
    return (
        <footer className='footer'>
            <IoIosArrowDropup className='footer__circle' onClick={() => scroll.scrollToTop({duration: 400})} />
            <p>© 2021 Adam Kui</p>
            <nav>
                <ul className='footer__pages'>
                    <li className='footer__pageItem' onClick={() => scroll.scrollToTop({duration: 400})}>Home</li>
                    <li className='footer__pageItem'><Link to='about' smooth={true} duration={400} offset={-60}>About</Link></li>
                    <li className='footer__pageItem'><Link to='portfolio' smooth={true} duration={400} offset={-60}>Projects</Link></li>
                    <li className='footer__pageItem'><Link to='contact' smooth={true} duration={400} offset={-60}>Contact</Link></li>
                </ul>
            </nav>
        </footer>
    )
}
