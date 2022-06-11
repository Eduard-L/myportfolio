import './About.css'
import { useRef, useEffect, useState } from 'react'
import imgSrc from '../../images/my_image.jpg'
import { useIsInVeiwPort } from '../../utils/useIsInViewPort'
export function About({ setIsOnViewPort, isAboutOnViewPort }) {
    const about = useRef()
    const [isAnimationWorked, setIsAnimationWorked] = useState(false)
    const { isVisible } = useIsInVeiwPort(about, 0.5);
    const thirtyPercentVisibility = useIsInVeiwPort(about, 0.3);


    useEffect(() => {
        setIsOnViewPort(isVisible)
        if (isAnimationWorked) return
        if (thirtyPercentVisibility.isVisible) {
            setIsAnimationWorked(true)
        }


    }, [isAnimationWorked, thirtyPercentVisibility.isVisible, isVisible])
    return (
        <section ref={about} id='about' className='about'>

            <div className={`animation-wrapper ${isAnimationWorked && 'animation-wrapper_animatied'}`}>
                <h2 className='about__header'>About me</h2>

                <div className='about__content-wrapper'>
                    <img className='about__img' src={imgSrc} alt="image of the author"></img>
                    <div className='about__paragraph-wrapper'>
                        <p className='about__subtitle'>Hello, my name is Eduard Loktev. I am a Full Stack developer with a great passion for coding, researching new technologies, and writing complicated algorithms. I am a troubleshooter and a team player who likes to help others debug their app. I am determined to succeed, try new challenges, and step out of my comfort zone.</p>
                        <p className='about__subtitle'>I recently completed <a className='about__link' href='https://www.practicum100.org/' target='_blank'>Practicum's by Yandex</a> intensive 8-month program designed to train talents to become successful web developers. The course was very challenging, I enjoyed learning new technologies in-depth and discovering new things.</p>
                        <p className='about__subtitle'>Apart from being a developer, in my free time I research the world of the stock market, discover blockchain technologies and do crossfit training. </p>
                    </div>
                </div>
            </div>


        </section>
    )
}