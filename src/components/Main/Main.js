import './Main.css'
import { About } from '../About/About'
import { Tech } from '../Tech/Tech'
import { Portfolio } from '../Portfolio/Portfolio'
export function Main({ }) {
    return (
        <main className='main'>
            <About />
            <Tech />
            <Portfolio />

        </main>
    )
}


