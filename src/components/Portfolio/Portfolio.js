import './Portfolio.css'
import { useEffect, useRef, useState } from 'react'
import { PortfolioCard } from '../PortfolioCard/PortfolioCard'
import { useIsInVeiwPort } from '../../utils/useIsInViewPort';
import aroundUsGif from '../../gifs/around-us.gif'
import newsExplorer from '../../gifs/news-explorer.gif'
import imageSeracher from '../../gifs/image-searcher.gif'
export function Portfolio({ isOnViewPort, setIsOnViewPort }) {
    const preBtn = useRef();
    const container = useRef();
    const portfolio = useRef();
    const [isAnimationWorked, setIsAnimationWorked] = useState(false)
    const { isVisible } = useIsInVeiwPort(portfolio, 0.5);
    const thirtyPercentVisibility = useIsInVeiwPort(portfolio, 0.3);
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scroll, setScroll] = useState(0)


    useEffect(() => {
        setIsOnViewPort(isVisible);
        if (isAnimationWorked) return
        if (thirtyPercentVisibility.isVisible) {
            setIsAnimationWorked(true)
        }
    }, [isVisible, isAnimationWorked, thirtyPercentVisibility.isVisible])






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
    function handleScrollForward(e) {

        setScrollPosition(container.current.scrollLeft + 500)



    }
    function handleScrollBack() {
        setScrollPosition(container.current.scrollLeft - 500)


    }


    return (
        <section ref={portfolio} className='portfolio'>
            <div className={`animation-wrapper ${isAnimationWorked && 'animation-wrapper_animatied'}`}>
                <h2 className='portfolio__title'>Portfolio</h2>
                <ul onScroll={() => setScroll(container.current.scrollLeft)} ref={container} className='portfolio__list snaps-inline'>
                    {
                        (scrollPosition > 200) && window.innerWidth > 700 &&
                        <li><button onClick={handleScrollBack} ref={preBtn} type='button' className={`portfolio__btn portfolio__btn_type_pre  `}></button></li>
                    }

                    <PortfolioCard imgSrc={newsExplorer} titleText='News Explorer' subtitleText='Find the latest news!' type='news-explorer' codeLink='https://github.com/Eduard-L/news-explorer-frontend' projectLink='https://news-searcher.students.nomoredomainssbs.ru/' />
                    <PortfolioCard imgSrc={aroundUsGif} titleText='Around Us' subtitleText='Make your own profile!' type='around-us' codeLink='https://github.com/Eduard-L/react-around-api-full' projectLink='https://around-us.students.nomoredomainssbs.ru' />
                    <PortfolioCard imgSrc={imageSeracher} titleText='Image Searcher' subtitleText='Find you image!' type='image-searcher' codeLink='https://github.com/Eduard-L/react-image-searcher' projectLink='https://eduard-l.github.io/react-image-searcher/' />
                    <PortfolioCard btnTextCode='PortLand Code' btnTextProject='PortLand Link' titleText='HomeLand/PortLand' subtitleText='Choose your journey!' type='HomeLand' codeLink="https://github.com/Eduard-L/web_project_3" projectLink='https://eduard-l.github.io/web_project_3/' >
                        <button type='button' className='portfolio__link-btn'>
                            <a href='https://eduard-l.github.io/web__project3_second-version/' className='portfolio__link' target='_blank'>HomeLand Link</a>
                        </button>
                        <button type='button' className='portfolio__link-btn'>
                            <a href="https://github.com/Eduard-L/web__project3_second-version" className='portfolio__link' target='_blank'>HomeLand Code</a>
                        </button>
                    </PortfolioCard>
                    {
                        (scrollPosition < 800) && window.innerWidth > 700 &&
                        <li><button onClick={handleScrollForward} type='button' className={`portfolio__btn portfolio__btn_type_next `}></button></li>
                    }


                </ul>
            </div>
        </section>
    )
}