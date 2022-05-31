import './Portfolio.css'
import { useEffect, useRef } from 'react'
import { PortfolioCard } from '../PortfolioCard/PortfolioCard'

export function Portfolio({ isHover, setIsHover }) {
    const preBtn = useRef()
    const container = useRef()
    let scrollPosition = 0;
    function handleScrollForward() {
        if (scrollPosition > 1227) {
            scrollPosition = 1227
        }
        else {
            scrollPosition = container.current.scrollLeft + 400
        }

        container.current.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        })
    }
    function handleScrollBack() {
        if (scrollPosition < 0) {
            scrollPosition = 0
        }
        else {
            scrollPosition = container.current.scrollLeft - 400
        }

        container.current.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        })
    }
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Portfolio</h2>
            <ul ref={container} className='portfolio__list snaps-inline'>
                <li><button onClick={handleScrollBack} ref={preBtn} type='button' className='portfolio__btn portfolio__btn_type_pre'></button></li>
                <PortfolioCard titleText='News Explorer' subtitleText='Find the latest news!' type='news-explorer' codeLink='#' projectLink='https://news-searcher.students.nomoreparties.sbs/' />
                <PortfolioCard titleText='Around Us' subtitleText='Make your own profile!' type='around-us' codeLink='#' projectLink='https://spartan.students.nomoreparties.sbs/signin' />
                <PortfolioCard titleText='Image Searcher' subtitleText='Find you image!' type='image-searcher' codeLink='#' projectLink='https://eduard-l.github.io/react-image-searcher/' />
                <PortfolioCard btnTextCode='PortLand Code' btnTextProject='PortLand Link' titleText='HomeLand/PortLand' subtitleText='Choose your journey!' type='HomeLand' codeLink="https://github.com/Eduard-L/web_project_3" projectLink='https://eduard-l.github.io/web_project_3/' >
                    <button type='button' className='portfolio__link-btn'>
                        <a href='https://eduard-l.github.io/web__project3_second-version/' className='portfolio__link' target='_blank'>HomeLand Link</a>
                    </button>
                    <button type='button' className='portfolio__link-btn'>
                        <a href="https://github.com/Eduard-L/web__project3_second-version" className='portfolio__link' target='_blank'>HomeLand Code</a>
                    </button>
                </PortfolioCard>
                <li className='portfolio__item portfolio__item_type_calculator'></li>
                <li><button onClick={handleScrollForward} type='button' className='portfolio__btn portfolio__btn_type_next'></button></li>
            </ul>
        </section>
    )
}