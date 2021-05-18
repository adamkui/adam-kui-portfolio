import {FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { motion } from "framer-motion"
import { fadeIn } from '../animation';
import { useScroll } from './useScroll';

export default function Contactbar() {
    const [element, controls] = useScroll();

    return (
        <motion.div className='about__contactbar' animate={controls} initial='hidden' ref={element}>
            <motion.p variants={fadeIn}>Contact me on:</motion.p>
            <motion.a className='about__contactbaritem' variants={fadeIn} href="https://www.linkedin.com/in/adamkui/" target="_blank"><FaLinkedin className='about__contacticon' />LinkedIn</motion.a>
            <motion.a className='about__contactbaritem' variants={fadeIn} href="mailto:addam.kui@gmail.com" target="_blank"><AiOutlineMail className='about__contacticon' />Gmail</motion.a>
            <motion.a className='about__contactbaritem' variants={fadeIn} href="https://www.facebook.com/addam.kui/" target="_blank"><FaFacebookSquare className='about__contacticon' />Facebook</motion.a>
        </motion.div>
    )
}
