import { useState } from "react"
export function PortfolioCard({ btnTextCode, btnTextProject, titleText, subtitleText, type, codeLink, projectLink, children }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <li onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} className={`portfolio__item portfolio__item_type_${type}`}>{
            isHover &&
            <div className='portfolio__item-content'>
                <h2 className={`portfolio__item-title portfolio__item-title_type_${type}`}>{titleText}</h2>
                <p className='portfolio__item-subtitle'>{subtitleText}</p>
                <div className={`portfolio__links portfolio__links_type_${type}`}>

                    <button type='button' className='portfolio__link-btn' >
                        <a href={projectLink} className='portfolio__link' target='_blank'>{btnTextProject || 'Project Link'}</a>
                    </button>
                    <button type='button' className='portfolio__link-btn'>
                        <a href={codeLink} className='portfolio__link'>{btnTextCode || 'Project Code'}</a>
                    </button>
                    {
                        children
                    }
                </div>
            </div>
        }</li>
    )
}