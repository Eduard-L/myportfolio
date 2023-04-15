import './Tech.css';
import { useIsInVeiwPort } from '../../utils/useIsInViewPort';
import { useRef, useEffect, useState } from 'react'
import { Cube } from '../Cube/Cube';
import reactImage from '../../images/react.png';
import nodeImage from '../../images/node.png';
import gitHubImage from '../../images/gitHub.png';
import htmlImage from '../../images/html.png';
import cssImage from '../../images/css.png';
import jsImage from '../../images/js.png';
import reduxImage from '../../images/redux.png';
import mongoImage from '../../images/mongo.png';
import expressImage from '../../images/ex.png'
import figmaImage from '../../images/figma.png'
import googleCloud from '../../images/google-cloud.png'
import ts from '../../images/typescript.png'
import github from '../../images/github1.png'
import xd from '../../images/XD.png'


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


                <div className='tech__list'>
                    <Cube imgUrl={reactImage} />
                    <Cube imgUrl={nodeImage} />
                    <Cube imgUrl={gitHubImage} />
                    <Cube imgUrl={jsImage} />
                    <Cube imgUrl={htmlImage} />
                    <Cube imgUrl={cssImage} />
                    <Cube imgUrl={figmaImage} />
                    {/* <Cube imgUrl={expressImage} /> */}
                    <Cube imgUrl={reduxImage} />
                    <Cube imgUrl={mongoImage} />
                    <Cube imgUrl={googleCloud} />
                    <Cube imgUrl={ts} />
                    <Cube imgUrl={xd} />
                    <Cube imgUrl={github} />


                </div>
            </div>
        </section>
    )
}