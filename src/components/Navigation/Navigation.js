import './Navigation.css'
import { Link } from 'react-scroll'
export function Navigation({ isOpen, setIsBurgerMenuOpen }) {
    return (
        <nav className={`navigation ${isOpen && 'navigation_type_burger-menu'} `}>
            <div className='wrapper'>
                <div className={`navigation__logo ${isOpen && 'navigation__logo_type_burger-menu'}`} />
                <button onClick={() => { setIsBurgerMenuOpen(!isOpen) }} className='navigation__burger-button'>
                    <span className={`navigation__burger-bar ${isOpen && 'navigation__burger-bar_type_top'}`} ></span>
                    <span className={`navigation__burger-bar ${isOpen && 'navigation__burger-bar_type_middle'}`}></span>
                    <span className={`navigation__burger-bar ${isOpen && 'navigation__burger-bar_type_bottom'}`}></span>
                </button>
            </div>

            <ul className={`navigation__list ${isOpen && 'navigation__list_type_burger-menu navigation__list_is-visible'}`}>

                <li className='navigation__item'><Link to='header' smooth={true} duration={500} className='navigation__link'>Home</Link></li>
                <li className='navigation__item'><Link to='about' smooth={true} duration={500} className='navigation__link'>About</Link></li>
                <li className='navigation__item'><Link to='tech' smooth={true} duration={500} className='navigation__link'>Technologies</Link></li>
                <li className='navigation__item'><Link to='portfolio' smooth={true} duration={500} className='navigation__link'>Portfolio</Link></li>
                <li className='navigation__item'><button type='button' className='navigation__link'>Contact</button></li>

            </ul>

        </nav>
    )
}