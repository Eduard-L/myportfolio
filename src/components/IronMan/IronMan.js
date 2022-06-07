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
    const ironManLink = useRef();
    const resetBtn = useRef();

    function changeMessage() {
        handleNavigateSection();
        if (!isIronManActivate) {
            handleIronManActive();
            return
        }

        setText(messages[messageCounter]);

        if (messageCounter === 17) {
            return
        }
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
    function handleNavigateSection() {
        if (messageCounter === 8) {
            setSectionToNavigate('about')
        }
        if (messageCounter === 10) {
            setSectionToNavigate('tech')
        }
        if (messageCounter === 12) {
            setSectionToNavigate('portfolio')
        }
        if (messageCounter === 13) {
            setSectionToNavigate('contact')
        }
    }

    function handleIronManShowContact() {
        ironMan.current.classList.add(`ironman_show-contact`)
        ironText.current.classList.add('ironman__subtitle_type_show-contact')
    }

    function hanldeIronManBackMiddle() {
        ironMan.current.classList.remove(`ironman_show-contact`)
        ironText.current.classList.remove('ironman__subtitle_type_show-contact')

    }

    function handleIronManActive() {
        setIsIronManActivate(true);
        ironMan.current.classList.remove(`ironman_close`);
        resetBtn.current.classList.remove('ironman__button_type_reset-is-diabled');



    }

    function handleCloseIronMan() {
        ironMan.current.classList.add(`ironman_close`);
        setIsIronManActivate(false);
        setSectionToNavigate('');
        resetBtn.current.classList.add('ironman__button_type_reset-is-diabled')
    }

    function handleResetIronMan() {
        setMessageCounter(0)
        ironMan.current.classList.remove(`ironman_show-contact`);
        ironMan.current.classList.remove(`ironman_close`);
        ironText.current.classList.remove('ironman__subtitle_type_show-contact');
        setIsIronManActivate(true)
        setSectionToNavigate('header')
        setText('Click on me')
    }
    return (

        <div ref={ironMan} className='ironman'>
            <Link onClick={changeMessage} ref={ironManLink} className='ironman__link' smooth={true} duration={800} to={sectionToNavigate} ></Link>
            {
                isIronManActivate && <p ref={ironText} className={`ironman__subtitle ${isIronManActivate && messageCounter > 3 && messageCounter < 9 && 'ironman__subtitle_type_show-contact'}`}>{text}</p>
            }

            <button onClick={handleCloseIronMan} className='ironman__button ironman__button_type_close' type='button'></button>
            <button ref={resetBtn} onClick={handleResetIronMan} className='ironman__button ironman__button_type_reset' type='button'></button>

        </div >

    )
}