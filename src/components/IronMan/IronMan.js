import './IronMan.css'
import { useEffect, useRef, useState } from 'react'
import { messages } from '../../utils/constants'
import { Link } from 'react-scroll'
export function IronMan({ text, setText }) {

    const [messageCounter, setMessageCounter] = useState(0);
    const [isIronManActivate, setIsIronManActivate] = useState(false);
    const [sectionToNavigate, setSectionToNavigate] = useState('');

    useEffect(() => {
        setText('Click on me')
        setTimeout(() => { setIsIronManActivate(true) }, 18000)

    }, [])

    const ironMan = useRef();
    const ironText = useRef();

    function changeMessage() {

        if (!isIronManActivate) {
            handleIronManActive();
            return
        }
        setText(messages[messageCounter])
        setMessageCounter(messageCounter + 1)
        if (messageCounter === 3) {
            handleIronManShowContact();
        }
        else if (messageCounter === 7) {

            setSectionToNavigate('about')
        }
        else if (messageCounter === 8) {
            hanldeIronManBackMiddle()
        }
        else if (messageCounter === 9) {

            setSectionToNavigate('tech')

        }
        else if (messageCounter === 11) {
            setSectionToNavigate('portfolio')
        }
    }

    function handleIronManShowContact() {
        ironMan.current.classList.add(`ironman_show-contact`)

    }

    function hanldeIronManBackMiddle() {
        ironMan.current.classList.remove(`ironman_show-contact`)
        ironText.current.classList.remove('ironman__subtitle_show-contact')

    }

    function handleIronManActive() {
        setIsIronManActivate(true);
        ironMan.current.classList.remove(`ironman_close`);

    }

    function handleCloseIronMan() {
        ironMan.current.classList.add(`ironman_close`);
        setIsIronManActivate(false)
    }

    function handleResetIronMan() {
        setMessageCounter(0)
        ironMan.current.classList.remove(`ironman_show-contact`);
        ironMan.current.classList.remove(`ironman_close`);
        setIsIronManActivate(true)
        setSectionToNavigate('header')
        setText('Click on me')
    }
    return (

        <div ref={ironMan} className='ironman'>
            <Link onClick={() => { changeMessage() }} ref={ironMan} className='ironman__link' smooth={true} duration={800} to={sectionToNavigate} ></Link>
            {
                isIronManActivate && <p ref={ironText} className='ironman__subtitle'>{text}</p>
            }

            <button onClick={handleCloseIronMan} className='ironman__button ironman__button_type_close' type='button'></button>
            <button onClick={handleResetIronMan} className='ironman__button ironman__button_type_reset' type='button'></button>

        </div >

    )
}