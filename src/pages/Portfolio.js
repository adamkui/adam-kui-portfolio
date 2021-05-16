import projects from '../data/projects.json'
import PortfolioItem from '../components/PortfolioItem'

export default function Portfolio() {
    
    return (
        <div className='portfolio' id='portfolio'>
            <h1 className='portfolio__title'>Projects</h1>
            <p className='portfolio__description'>Take a look at some of the projects I worked on as my own ideas and during completing learning courses.</p>
            <div className='portfolio__projects'>
                {projects.map(p => (
                    <PortfolioItem title={p.title} description={p.description} tags={p.tags} key={p.title} />
                ))}
            </div>
        </div>
    )
}
