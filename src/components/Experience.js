import ExperienceItem from './ExperienceItem'
import experience from '../data/experience.json'
import { motion } from "framer-motion"
import { fadeInList, delayedTitleAnim } from '../animation';
import { useScroll } from './useScroll';
import { useMediaQuery } from 'react-responsive';

export default function Experience() {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [element, controls] = useScroll(isMobile ? 0.1 : 0.5);

    return (
        <motion.div className='secContainer' animate={controls} initial='hidden' ref={element}>
            <motion.h1 className='secContainer__title' variants={delayedTitleAnim}>Experience</motion.h1>
            <motion.ul className='secContainer__expList' variants={fadeInList}>
                {experience.map(x => (
                    <ExperienceItem key={x.title} title={x.title} desc={x.desc} logo={x.logo} />
                ))}
            </motion.ul>
        </motion.div>
    )
}


