import {FaReact, FaHtml5, FaRProject} from 'react-icons/fa'
import {HiCode} from 'react-icons/hi'
import { motion } from "framer-motion"
import { titleAnim, subTitleAnim, fadeIn, zoomOut } from '../animation';
import { useScroll } from './useScroll';

export default function AboutMe() {
    const [element, controls] = useScroll();

    return (
        <motion.div className='firstcontainer' animate={controls} initial='hidden' ref={element}>
            <motion.h1 className='firstcontainer__title' variants={titleAnim}>About Me</motion.h1>
            <motion.h4 className='firstcontainer__subtitle' variants={subTitleAnim} >Hello World!</motion.h4>
            <motion.p className='firstcontainer__description' variants={fadeIn}>
                Hello, and welcome to my webpage! My name is Adam Kui, I'm a developer from Budapest, Hungary.<br/>
                I'm passionate about modern frontend web development, automation and almost everything that is related to coding.<br/>
                Read about my experience or take a look at some of my projects below.
            </motion.p>
            <motion.div className='firstcontainer__profilepic' variants={zoomOut}></motion.div>
            <HiCode className='firstcontainer__svgs' />
            <HiCode className='firstcontainer__svgs' />
            <FaReact className='firstcontainer__svgs' />
            <FaHtml5 className='firstcontainer__svgs' />
        </motion.div>
    )
}
