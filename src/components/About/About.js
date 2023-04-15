import './About.css'
import { useRef, useEffect, useState } from 'react'
import imgSrc from '../../images/my_image.jpg'
import cartoonSrc from '../../images/cartoon.png'
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
                    <div className='circle'>
                        <img className='about__img circle-front' src={imgSrc} alt="image of the author"></img>
                        <img className='about__img circle-back' src={cartoonSrc} alt="image of the author"></img>
                    </div>

                    <div className='about__paragraph-wrapper'>
                        <p className='about__subtitle'>Hello, my name is Eduard Loktev, and I am a Full Stack developer with a great passion for coding, researching new technologies, and writing complicated algorithms. I am a troubleshooter and a team player who likes to help others debug their app. With my determination to succeed and my willingness to try new challenges, I always strive to step out of my comfort zone.</p>
                        <p className='about__subtitle'>I have experience working as a Front-End Engineer at startup company, where I contributed to the development of a platform for restaurant owners to create customized digital menus and built a self-ordering kiosk platform from scratch. Currently, I am working as a Full Stack Developer at BOOSTAPP, where I develop, test, and maintain full-stack applications for fitness and cosmetic businesses. Additionally, I am a Coding Bootcamp Instructor at <a className='about__link' href='https://www.practicum100.org/' target='_blank'>Practicum's by Yandex</a> and a volunteer Full Stack Developer at Code For Israel organization, where I collaborate remotely with a team to develop software projects for social needs in the community. </p>
                    </div>
                </div>
            </div>


        </section>
    )
}