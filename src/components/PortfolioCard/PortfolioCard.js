import { useState } from "react"

export function PortfolioCard({ btnTextCode, btnTextProject, titleText, subtitleText, type, codeLink, projectLink, children, imgSrc }) {

    const [isHover, setIsHover] = useState(false)

    return (
        <li onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} className={`portfolio__item portfolio__item_type_${type}`}>

            {

                !isHover ? imgSrc && <img className="portfolio__item-img" src={imgSrc} /> :
                    <div className='portfolio__item-content'>

                        <h2 className={`portfolio__item-title portfolio__item-title_type_${type}`}>{titleText}</h2>
                        <p className='portfolio__item-subtitle'>{subtitleText}</p>
                        <div className={`portfolio__links portfolio__links_type_${type}`}>

                            <button type='button' className='portfolio__link-btn' >
                                <a href={projectLink} className='portfolio__link' target='_blank'>{btnTextProject || 'Live Demo'}</a>
                            </button>
                            <button type='button' className='portfolio__link-btn'>
                                <a href={codeLink} target="_blankcd " className='portfolio__link'>{btnTextCode || 'GitHub'}</a>
                            </button>
                            {
                                children
                            }
                        </div>
                    </div>
            }</li>
    )
}