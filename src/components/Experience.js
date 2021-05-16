import ExperienceItem from './ExperienceItem'
import experience from '../data/experience.json'

export default function Experience() {
    return (
        <div className='secContainer'>
            <h1 className='secContainer__title'>Experience</h1>
            <ul className='secContainer__expList'>
                {experience.map(x => (
                    <li className='secContainer__expListItem' key={x.title}><ExperienceItem title={x.title} desc={x.desc} logo={x.logo} key={x.title}/></li>
                ))}
            </ul>
        </div>
    )
}


