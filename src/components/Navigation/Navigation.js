import './Navigation.css'
import { Link } from 'react-scroll'
import { useEffect, useRef } from 'react'
export function Navigation({
    isOpen,
    setIsBurgerMenuOpen,
    isHeaderOnViewPort,
    isAboutOnViewPort,
    isContactOnViewPort,
    isTechOnViewPort,
    isPortfolioOnViewPort,
}) {
    const navigation = useRef()



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

                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='header' smooth={true} duration={1000} className={`navigation__link ${isHeaderOnViewPort && 'navigation__link_type_contact'}`}>Home</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='about' smooth={true} duration={1000} className={`navigation__link ${isAboutOnViewPort && 'navigation__link_type_contact'}`} > About</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='tech' smooth={true} duration={1000} className={`navigation__link ${isTechOnViewPort && 'navigation__link_type_contact'}`}>Technologies</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='portfolio' smooth={true} duration={1000} className={`navigation__link ${isPortfolioOnViewPort && 'navigation__link_type_contact'}`}>Portfolio</Link></li>
                <li className='navigation__item'><Link onClick={() => setIsBurgerMenuOpen(false)} to='contact' smooth={true} duration={1500} className={`navigation__link ${isContactOnViewPort && 'navigation__link_type_contact'}`}>Contact</Link></li>

            </ul>

        </nav >
    )
}