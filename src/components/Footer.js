import { Link, animateScroll as scroll } from 'react-scroll'
import { IoIosArrowDropup } from 'react-icons/io'
import { motion } from "framer-motion"
import { titleAnim, swimInRight } from '../animation';
import { useScroll } from './useScroll';

export default function Footer() {
    const [element, controls] = useScroll(0.2);

    return (
        <motion.footer className='footer' animate={controls} initial='hidden' ref={element}>
            <IoIosArrowDropup className='footer__circle' onClick={() => scroll.scrollToTop({duration: 400})} />
            <motion.p variants={titleAnim}>© 2021 Adam Kui</motion.p>
            <motion.nav variants={swimInRight} className='footer__pages'>
                <li className='footer__pageItem' onClick={() => scroll.scrollToTop({duration: 400})}>Home</li>
                <Link to='about' smooth={true} duration={400} offset={-60} className='footer__pageItem' >About</Link>
                <Link to='portfolio' smooth={true} duration={400} offset={-60} className='footer__pageItem' >Projects</Link>
                <Link to='contact' smooth={true} duration={400} offset={-60} className='footer__pageItem' >Contact</Link>
            </motion.nav>
        </motion.footer>
    )
}
