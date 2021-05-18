import projects from '../data/projects.json'
import PortfolioItem from '../components/PortfolioItem'
import { motion } from "framer-motion"
import { titleAnimRight, fadeInList, fadeIn } from '../animation';
import { useScroll } from '../components/useScroll';
import { useMediaQuery } from 'react-responsive';

export default function Portfolio() {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [element, controls] = useScroll(isMobile ? 0.1 : 0.2);
    
    return (
        <motion.div className='portfolio' id='portfolio' animate={controls} initial='hidden' ref={element}>
            <motion.h1 className='portfolio__title' variants={titleAnimRight}>Projects</motion.h1>
            <motion.p className='portfolio__description' variants={fadeIn}>Take a look at some of the projects I worked on as my own ideas and during completing learning courses.</motion.p>
            <motion.div className='portfolio__projects' variants={fadeInList}>
                {projects.map(p => (
                    <PortfolioItem 
                        title={p.title}
                        description={p.description}
                        tags={p.tags}
                        key={p.title}
                        url={p.url}
                        img={p.img}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}
