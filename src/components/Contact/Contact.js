import { Video } from '../Video/Video'
import './Contact.css'
import src from '../../videos/footervideo.mp4'
import { useForm } from '../../utils/useForm'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useIsInVeiwPort } from '../../utils/useIsInViewPort';

export function Contact({ setIsOnViewPort }) {
    const [isAnimationWorked, setIsAnimationWorked] = useState(false)
    const contact = useRef();
    const { handleChange, values, isValid, errors, resetForm } = useForm();
    const { isVisible } = useIsInVeiwPort(contact, 0.5);
    const thirtyPercentVisibility = useIsInVeiwPort(contact, 0.3);
    const btn = useRef();
    const form = useRef();
    const [btnText, setBtnText] = useState('Submit');

    useEffect(() => {
        if (!isValid) {
            btn.current.setAttribute("disabled", "");
        }
        if (isValid) {
            btn.current.removeAttribute("disabled", "");
        }
    }, [isValid]);

    useEffect(() => {
        setIsOnViewPort(isVisible);
        if (isAnimationWorked) return
        if (thirtyPercentVisibility.isVisible) {
            setIsAnimationWorked(true)
        }

    }, [isAnimationWorked, thirtyPercentVisibility.isVisible, isVisible])

    async function handelSubmitForm(e) {
        e.preventDefault();

        setBtnText('Loading...');
        btn.current.classList.add('contact__button_is-blinking');

        try {

            const res = await emailjs.sendForm('service_492o9pn', 'template_eleka3r', form.current, 'lOHvxVn1E5xrzpeW_')
            if (res) {
                resetForm();
                alert('Thank you , We appreciate your time')
            }
        }
        catch (error) {
            alert('Something went wrong , we dont get you message, please try again')
            console.log(error)
        }
        finally {
            setBtnText('Submit');
            btn.current.classList.remove('contact__button_is-blinking');
        }

    }
    return (

        <div ref={contact} className='contact'>
            <Video src={src} type='contact' />
            <div className={`animation-wrapper ${isAnimationWorked && 'animation-wrapper_animatied'}`}>
                <h2 className='contact__title'>Contact Me</h2>

                <p className='contact__subtitle'>I'm always open to new opportunities and challenges so feel free to contact me and together we will start this journey!</p>
                <form ref={form} onSubmit={handelSubmitForm} className='contact__form'>
                    <h3 className='contact__form-title'>Contact me / Share your thoughts</h3>
                    <label htmlFor='name' className='contact__label' >Name</label>
                    <input value={values.name || ''} onChange={(e) => handleChange(e)} type='text' name='name' className='contact__input' id='name' minLength={2} maxLength={20} placeholder='Enter your name' required />
                    <span className='contact__form-error'>{errors.name}</span>
                    <label htmlFor='email' className='contact__label' >Email</label>
                    <input value={values.email || ''} onChange={(e) => handleChange(e)} type='email' name='email' className='contact__input' id='email' minLength={4} maxLength={40} placeholder='Enter a valid email' required />
                    <span className='contact__form-error'>{errors.email}</span>
                    <label htmlFor='email' className='contact__label'  >Message</label>
                    <textarea value={values.message || ''} onChange={(e) => handleChange(e)} type='text' name='message' className='contact__input' id='message' minLength={2} placeholder='Enter your message' required />
                    <span className='contact__form-error'>{errors.message}</span>
                    <button ref={btn} type='submit' className='contact__button ' disabled>{btnText}</button>
                </form>
            </div>
        </div>
    )
}