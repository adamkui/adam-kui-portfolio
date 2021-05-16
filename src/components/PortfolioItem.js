export default function PortfolioItem({title, description, tags, url, img}) {
    return (
        <div className='portfolio__project'>
            <img className='portfolio__projectThumbnail' alt={title} src={img} />
            <a href={url} target="_blank" rel="noreferrer" className='portfolio__projectTitle'>{title}</a>
            <p className='portfolio__projectDescription'>{description}</p>
            <div className='portfolio__projectTagsContainer'>
                {tags.map((tag, i) => (
                    <div key={`tag${i}`} className='portfolio__projectTag'>{tag}</div>
                ))}
            </div>
        </div>
    )
}
