import { Video } from '../Video/Video'
import './Header.css'
import videoSrc from '../../videos/video2.mp4'
import { Navigation } from '../Navigation/Navigation'
import { useIsInVeiwPort } from '../../utils/useIsInViewPort'
import { useRef, useState, useEffect } from 'react'
import songSrc from '../../music/superherosong.mp3'

export function Header({
    isOpen,
    setIsBurgerMenuOpen,
    isHeaderOnViewPort,
    setIsOnViewPort,
    isAboutOnViewPort,
    isContactOnViewPort,
    isTechOnViewPort,
    isPortfolioOnViewPort
}) {

    const header = useRef()
    const { isVisible } = useIsInVeiwPort(header, 0.5)
    const [isSongPlaying, setIsSongPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio(`${songSrc}`));
    audio.setAttribute('loop', true);

    const musicControlBtn = useRef();
    useEffect(() => {
        setIsOnViewPort(isVisible)

    }, [isVisible]);

    useEffect(() => {
        function handlePlaySong() {
            audio.play();

        }
        function hanldeStopPlayingSong() {
            audio.pause();

        }

        if (isSongPlaying) {
            handlePlaySong()
        }
        else {
            hanldeStopPlayingSong()
        }

    }, [isSongPlaying])

    return (
        <header ref={header} id='header' className='header'>
            <button ref={musicControlBtn} onClick={() => { setIsSongPlaying(!isSongPlaying) }} type='button' className={`header__music-btn ${isSongPlaying && 'header__music-btn_is-playing'}`}></button>
            <Navigation
                isOpen={isOpen}
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}
                isHeaderOnViewPort={isHeaderOnViewPort}
                isAboutOnViewPort={isAboutOnViewPort}
                isContactOnViewPort={isContactOnViewPort}
                isTechOnViewPort={isTechOnViewPort}
                isPortfolioOnViewPort={isPortfolioOnViewPort}
            />
            <div className='header__content-wrapper'>
                <div className='header__content'>
                    <p className='header__title '>Welcome, I am</p>
                    <h1 className='header__title'> Eduard Loktev</h1>
                    <p className='header__title'>Full Stack Web Developer.</p>
                </div>
                <q className='header__subtitle'>A journey of a thousand miles begins with a single step</q>
            </div>
            <Video src={videoSrc} />
            <div className='header__links'>
                <a href='mailto:eduard08@walla.com' className='header__link header__link_type_email' target="_blank"></a>
                <a href='https://drive.google.com/file/d/1nLVwiDjOSWjApY4Nz5O_UZfqhiu81xvl/view?usp=share_link' className='header__link header__link_type_cv' target="_blank"></a>
                <a href='https://github.com/Eduard-L' className='header__link header__link_type_github' target="_blank"></a>
                <a href='https://linkedin.com/in/eduard-loktev' className='header__link header__link_type_linkedin' target="_blank"></a>
                <a href="https://wa.me/+972505651505" className='header__link header__link_type_whatsapp' target="_blank"></a>

            </div>

        </header >

    )
}