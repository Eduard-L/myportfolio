
import './App.css';
import { PreLoader } from '../PreLoader/PreLoader';
import { Header } from '../Header/Header';
import { useEffect, useRef, useState } from 'react';
import { About } from '../About/About'
import { Tech } from '../Tech/Tech'
import { IronMan } from '../IronMan/IronMan';
import { Portfolio } from '../Portfolio/Portfolio'
import useScrollSnap from 'react-use-scroll-snap';
import { ParcticleBackground } from '../ParticleBackground/ParcticleBackground';
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [messageText, setMessageText] = useState('')
  const [isHeaderOnViewPort, setIsHeaderOnViewPort] = useState(false)
  const [isAboutOnViewPort, setIsAboutOnViewPort] = useState(false)
  const [isTechOnViewPort, setIsTechOnViewPort] = useState(false)
  const [isPortfolioOnViewPort, setIsPortfolioOnViewPort] = useState(false)
  const [isContactOnViewPort, setIsContactOnViewPort] = useState(false)
  const container = useRef()

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 12000)
  }, [])
  const main = useRef()

  // useScrollSnap({ ref: main, duration: 50, delay: 30 });
  return (

    <div ref={container} className="App snaps-inline">
      {!isLoading ?

        <div ref={main} onLoad={() => { main.current.classList.add('main_is-visible') }} className='main'>
          <IronMan
            text={messageText}
            setText={setMessageText}

          />
          <ParcticleBackground />

          <Header
            setIsOnViewPort={setIsHeaderOnViewPort}
            isOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            isHeaderOnViewPort={isHeaderOnViewPort}
            isAboutOnViewPort={isAboutOnViewPort}
            isContactOnViewPort={isContactOnViewPort}
            isTechOnViewPort={isTechOnViewPort}
            isPortfolioOnViewPort={isPortfolioOnViewPort}
          />
          <About setIsOnViewPort={setIsAboutOnViewPort} />
          <Tech setIsOnViewPort={setIsTechOnViewPort} />
          <Portfolio setIsOnViewPort={setIsPortfolioOnViewPort} />
          <Contact setIsOnViewPort={setIsContactOnViewPort} />
          <Footer />


        </div>
        : <PreLoader />


      }


    </div>

  )
}

export default App;
