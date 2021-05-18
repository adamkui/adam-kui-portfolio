import { motion } from "framer-motion"
import { fadeInListItemShort } from '../animation';
import { FaGithub } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'

export default function PortfolioItem({title, description, tags, url, img, gitRepo}) {
    return (
        <motion.div className='portfolio__project' variants={fadeInListItemShort}>
            <img className='portfolio__projectThumbnail' alt={title} src={img} />
            <a href={url} target="_blank" rel="noreferrer" className='portfolio__projectTitle'>{title}</a>
            <p className='portfolio__projectDescription'>{description}</p>
            <div className='portfolio__projectTagsContainer'>
                {tags.map((tag, i) => (
                    <div key={`tag${i}`} className='portfolio__projectTag'>{tag}</div>
                ))}
            </div>
            <div className='portfolio__btnsContainer'>
                <a href={url} target="_blank" rel="noreferrer" className='portfolio__btn portfolio__viewBtn'>View Website <MdOpenInNew className='portfolio__viewIcon' /></a>
                {gitRepo && <a className='portfolio__btn portfolio__gitBtn' href={gitRepo} target='_blank' rel='noreferrer' >View on Github <FaGithub className='portfolio__gitIcon' /></a>}
            </div>
        </motion.div>
    )
}
