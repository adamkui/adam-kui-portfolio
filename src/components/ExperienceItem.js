import {FaReact, FaCss3Alt, FaHtml5} from 'react-icons/fa'
import {SiJavascript, SiSass, SiNextDotJs, SiTypescript} from 'react-icons/si'
import {RiGitRepositoryCommitsFill} from 'react-icons/ri'

export default function ExperienceItem({title, desc, logo}) {
    const switchLogo = (logo) => {
        switch(logo){
            case 'html': return <FaHtml5 className='secContainer__expItemLogo secContainer__expItemHtmlLogo' />
            case 'css': return <FaCss3Alt className='secContainer__expItemLogo secContainer__expItemCssLogo' />
            case 'sass': return <SiSass className='secContainer__expItemLogo secContainer__expItemSassLogo' />
            case 'javascript': return <SiJavascript className='secContainer__expItemLogo secContainer__expItemJsLogo' />
            case 'react': return <FaReact className='secContainer__expItemLogo secContainer__expItemReactLogo' />
            case 'next': return <SiNextDotJs className='secContainer__expItemLogo secContainer__expItemNextLogo' />
            case 'repo': return <RiGitRepositoryCommitsFill className='secContainer__expItemLogo secContainer__expItemRepoLogo' />
            case 'typescript': return <SiTypescript className='secContainer__expItemLogo secContainer__expItemTsLogo' />
            default: return null;
        }
    }

    return (
        <div className='secContainer__expItem'>
            <div>{ switchLogo(logo) }</div>
            <h1 className='secContainer__expItemTitle'>{title}</h1>
            <p className='secContainer__description'>{desc}</p>
        </div>
    )
}
