import '../Footer/Footer.css'

export function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>{`© ${new Date().getFullYear()} Eduard Loktev`}</h2>
        </footer>
    )
}