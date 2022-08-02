import './Portfolio.css'
import { useEffect, useRef, useState } from 'react'
import { PortfolioCard } from '../PortfolioCard/PortfolioCard'
import { useIsInVeiwPort } from '../../utils/useIsInViewPort';
export function Portfolio({ isOnViewPort, setIsOnViewPort }) {
    const preBtn = useRef();
    const container = useRef();
    const portfolio = useRef();
    const [isAnimationWorked, setIsAnimationWorked] = useState(false)
    const { isVisible } = useIsInVeiwPort(portfolio, 0.5);
    const thirtyPercentVisibility = useIsInVeiwPort(portfolio, 0.3);
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        setIsOnViewPort(isVisible);
        if (isAnimationWorked) return
        if (thirtyPercentVisibility.isVisible) {
            setIsAnimationWorked(true)
        }
    }, [isVisible, isAnimationWorked, thirtyPercentVisibility.isVisible])


    // let scrollPosition = 0;

    useEffect(() => {
        if (scrollPosition >= 1140) {
            setScrollPosition(1140)
        }
        if (scrollPosition <= 0) {
            setScrollPosition(0)
        }
        container.current.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        })

    }, [scrollPosition])
    function handleScrollForward() {
        setScrollPosition(container.current.scrollLeft + 400)



    }
    function handleScrollBack() {
        setScrollPosition(container.current.scrollLeft - 400)

    }
    return (
        <section ref={portfolio} className='portfolio'>
            <div className={`animation-wrapper ${isAnimationWorked && 'animation-wrapper_animatied'}`}>
                <h2 className='portfolio__title'>Portfolio</h2>
                <ul ref={container} className='portfolio__list snaps-inline'>
                    <li><button onClick={handleScrollBack} ref={preBtn} type='button' className={`portfolio__btn portfolio__btn_type_pre ${scrollPosition <= 200 && 'portfolio__btn_not-visible'} `}></button></li>
                    <PortfolioCard titleText='News Explorer' subtitleText='Find the latest news!' type='news-explorer' codeLink='https://github.com/Eduard-L/news-explorer-frontend' projectLink='https://news-searcher.students.nomoredomainssbs.ru/' />
                    <PortfolioCard titleText='Around Us' subtitleText='Make your own profile!' type='around-us' codeLink='https://github.com/Eduard-L/react-around-api-full' projectLink='https://around-us.students.nomoredomainssbs.ru' />
                    <PortfolioCard titleText='Image Searcher' subtitleText='Find you image!' type='image-searcher' codeLink='https://github.com/Eduard-L/react-image-searcher' projectLink='https://eduard-l.github.io/react-image-searcher/' />
                    <PortfolioCard btnTextCode='PortLand Code' btnTextProject='PortLand Link' titleText='HomeLand/PortLand' subtitleText='Choose your journey!' type='HomeLand' codeLink="https://github.com/Eduard-L/web_project_3" projectLink='https://eduard-l.github.io/web_project_3/' >
                        <button type='button' className='portfolio__link-btn'>
                            <a href='https://eduard-l.github.io/web__project3_second-version/' className='portfolio__link' target='_blank'>HomeLand Link</a>
                        </button>
                        <button type='button' className='portfolio__link-btn'>
                            <a href="https://github.com/Eduard-L/web__project3_second-version" className='portfolio__link' target='_blank'>HomeLand Code</a>
                        </button>
                    </PortfolioCard>

                    <li><button onClick={handleScrollForward} type='button' className={`portfolio__btn portfolio__btn_type_next ${scrollPosition >= 850 && 'portfolio__btn_not-visible'}`}></button></li>
                </ul>
            </div>
        </section>
    )
}