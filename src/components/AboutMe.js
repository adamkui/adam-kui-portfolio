import {FaReact, FaHtml5} from 'react-icons/fa'
import {HiCode} from 'react-icons/hi'

export default function AboutMe() {
    return (
        <div className='firstcontainer'>
            <h1 className='firstcontainer__title'>About Me</h1>
            <h4 className='firstcontainer__subtitle'>Hello World!</h4>
            <p className='firstcontainer__description'>
                Hello, and welcome to my webpage! My name is Adam Kui, I'm a developer from Budapest, Hungary.<br/>
                I'm passionate about modern frontend web development, automation and almost everything that is related to coding.<br/>
                Read about my experience or take a look at some of my projects below.
            </p>
            <div className='firstcontainer__profilepic'></div>
            <HiCode className='firstcontainer__svgs' />
            <HiCode className='firstcontainer__svgs' />
            <FaReact className='firstcontainer__svgs' />
            <FaHtml5 className='firstcontainer__svgs' />
        </div>
    )
}
