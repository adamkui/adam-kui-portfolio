import ExperienceItem from './ExperienceItem'

export default function Experience() {
    const experience = [
        {
            title: "HTML5",
            desc: "HTML is the markup language of websites, pretty much the basics of everything. That's why I started learning web development with HTML5.",
            logo: "html"
        },
        {
            title: "CSS3",
            desc: "CSS makes a huge difference on websites. I learnt lots of CSS, however without a preprocessor I found it's a little bit messy, and too much manual work.",
            logo: "css"
        },
        {
            title: "Sass",
            desc: "After trying some CSS pre-processors I found Sass to be my favorite, and I'm using it in almost all of my projects since then.",
            logo: "sass"
        },
        {
            title: "JavaScript",
            desc: "I spent my first months of learning web-development with understanding how modern JavaScript (ES6+) works.",
            logo: "javascript"
        },
        {
            title: "TypeScript",
            desc: "I'm not a big fan of TS but I see it's advantages, and I believe that as a junior web developer it is important to understand the basics of it.",
            logo: "typescript"
        },
        {
            title: "React.JS",
            desc: "React and JSX was a little strange to learn after months of coding in simple JavaScript. But since I understood how it works I can't praise and use it enough.",
            logo: "react"
        },
        {
            title: "Next.JS",
            desc: "I'm still relatively new to Next.JS and SSR, but I really enjoy using it so far as it makes development easier, and my products faster.",
            logo: "next"
        },
        {
            title: "SCM",
            desc: "I used Git, TFVS and SVN during my career. My favourites are definitely git based repositories.",
            logo: "repo"
        },
    ];

    return (
        <div className='secContainer'>
            <h1 className='secContainer__title'>Experience</h1>
            <ul className='secContainer__expList'>
                {experience.map(x => (
                    <li className='secContainer__expListItem'><ExperienceItem title={x.title} desc={x.desc} logo={x.logo}/></li>
                ))}
            </ul>
        </div>
    )
}

