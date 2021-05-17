import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"
import { introAnim, btnAnim } from '../animation';

export default function Intro() {

    return (
        <section className='intro'>
            <motion.h1 className='intro__title' variants={introAnim} initial="hidden" animate="show">Hello, I'm <span className='intro__title--yellow'>Adam Kui.</span></motion.h1>
            <motion.h1 className='intro__title' variants={introAnim} initial="hidden" animate="show">I'm a frontend web developer.</motion.h1>
            <Link to="header" smooth={true} duration={400} offset={0} >
                <motion.button variants={btnAnim} initial="hidden" animate="show" className='intro__btn' >View My Work <FaArrowRight className='intro__arrow' /></motion.button>
            </Link>
        </section>
    )
}
