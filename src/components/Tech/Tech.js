import './Tech.css';
import { useIsInVeiwPort } from '../../utils/useIsInViewPort';
import { useRef, useEffect, useState } from 'react'
export function Tech({ isOnViewPort, setIsOnViewPort }) {
    const tech = useRef();
    const [isAnimationWorked, setIsAnimationWorked] = useState(false)
    const { isVisible } = useIsInVeiwPort(tech, 0.5);
    const thirtyPercentVisibility = useIsInVeiwPort(tech, 0.3);

    useEffect(() => {
        setIsOnViewPort(isVisible);
        if (isAnimationWorked) return
        if (thirtyPercentVisibility.isVisible) {
            setIsAnimationWorked(true)
        }

    }, [isVisible, thirtyPercentVisibility.isVisible, isVisible])
    return (
        <section ref={tech} className='tech'>
            <div className={`animation-wrapper ${isAnimationWorked && 'animation-wrapper_animatied'}`}>
                <h2 className='tech__title'>My Tech Stack</h2>
                <ul className='tech__list'>
                    <li className='tech__item tech__item_type_html'><a className='tech__link' href='https://www.w3schools.com/html/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_css'><a className='tech__link' href='https://www.w3schools.com/css/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_js'><a className='tech__link' href='https://www.w3schools.com/js/default.asp' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_react'><a className='tech__link' href='https://reactjs.org/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_redux'><a className='tech__link' href='https://redux.js.org/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_node'><a className='tech__link' href='https://nodejs.org/en/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_mongo'><a className='tech__link' href='https://www.mongodb.com/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_express'><a className='tech__link' href='https://expressjs.com/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_github'><a className='tech__link' href='https://git-scm.com/' target='_blank'></a></li>
                    <li className='tech__item tech__item_type_figma'><a className='tech__link' href='https://www.figma.com/' target='_blank'></a></li>

                </ul>
            </div>
        </section>
    )
}