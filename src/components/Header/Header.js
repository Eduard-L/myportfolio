import { Video } from '../Video/Video'
import './Header.css'
import videoSrc from '../../videos/video2.mp4'
import { Navigation } from '../Navigation/Navigation'

import { useRef } from 'react'


export function Header({ isOpen, setIsBurgerMenuOpen }) {
    const header = useRef()

    return (
        <header ref={header} id='header' className='header'>
            <Navigation isOpen={isOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
            <div className='header__content'>
                <p className='header__title '>Welcome, I am</p>
                <h1 className='header__title'> Eduard Loktev</h1>
                <p className='header__title'>Full Stack Web Developer.</p>
            </div>
            <q className='header__subtitle'>A journey of a thousand miles begins with a single step</q>

            <Video src={videoSrc} />
            <div className='header__links'>
                <a href='mailto:eduard08@walla.com' className='header__link header__link_type_email' target="_blank"></a>
                <a href='https://drive.google.com/file/d/1MZqx6depC_NdZN81BhuiXKWtue4RqHdC/view?usp=sharing' className='header__link header__link_type_cv' target="_blank"></a>
                <a href='https://github.com/Eduard-L' className='header__link header__link_type_github' target="_blank"></a>
                <a href='https://linkedin.com/in/eduard-loktev' className='header__link header__link_type_linkedin' target="_blank"></a>
                <a href="https://wa.me/+972505651505" className='header__link header__link_type_whatsapp' target="_blank"></a>

            </div>

        </header>

    )
}