import { FaArrowRight } from 'react-icons/fa'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Intro() {

    return (
        <section className='intro'>
            <h1 className='intro__title'>Hello, I'm <span className='intro__title--yellow'>Adam Kui.</span></h1>
            <h1 className='intro__title'>I'm a frontend web developer.</h1>
            <Link to="header" smooth={true} duration={400}>
                <button className='intro__btn' >View My Work <FaArrowRight className='intro__arrow' /></button>
            </Link>
        </section>
    )
}
