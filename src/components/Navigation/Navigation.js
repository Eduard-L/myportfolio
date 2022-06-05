import './Navigation.css'
import { Link } from 'react-scroll'
import { useEffect, useRef } from 'react'
export function Navigation({ isOpen, setIsBurgerMenuOpen }) {
    const navigation = useRef()
    let scrollYPosition = 0;

    // useEffect(() => {
    //     function handleScrollDown() {
    //         if (window.scrollY > scrollYPosition) {
    //             navigation.current.style.display = 'none'

    //         }
    //         else {
    //             navigation.current.style.display = 'flex'
    //         }
    //         scrollYPosition = window.scrollY
    //     }
    //     window.addEventListener('scroll', handleScrollDown);
    //     return () => {
    //         window.removeEventListener('scroll', handleScrollDown)
    //     }
    // })
    return (
        <nav ref={navigation} className={`navigation ${isOpen && 'navigation_type_burger-menu'} `}>
            <div className='wrapper'>
                <div className={`navigation__logo ${isOpen && 'navigation__logo_type_burger-menu'}`} />
                <button onClick={() => { setIsBurgerMenuOpen(!isOpen) }} className='navigation__burger-button'>
                    <span className={`navigation__burger-bar ${isOpen && 'navigation__burger-bar_type_top'}`} ></span>
                    <span className={`navigation__burger-bar ${isOpen && 'navigation__burger-bar_type_middle'}`}></span>
                    <span className={`navigation__burger-bar ${isOpen && 'navigation__burger-bar_type_bottom'}`}></span>
                </button>
            </div>

            <ul className={`navigation__list ${isOpen && 'navigation__list_type_burger-menu navigation__list_is-visible'}`}>

                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='header' smooth={true} duration={400} className='navigation__link'>Home</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='about' smooth={true} duration={800} className='navigation__link'>About</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='tech' smooth={true} duration={1200} className='navigation__link'>Technologies</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='portfolio' smooth={true} duration={1600} className='navigation__link'>Portfolio</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='contact' smooth={true} duration={2000} className='navigation__link navigation__link_type_contact'>Contact</Link></li>

            </ul>

        </nav>
    )
}