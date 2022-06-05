
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
import createScrollSnap from "scroll-snap";
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [messageText, setMessageText] = useState('')
  const container = useRef()
  // function bindScrollSnap() {
  //   const element = container.current;

  //   createScrollSnap(
  //     element,
  //     {
  //       snapDestinationY: "100%"
  //     },
  //     () => console.log("snapped")
  //   );
  // }

  // useEffect(() => {
  //   bindScrollSnap();
  // }, [])

  useEffect(() => {
    // document.body.classList.add('.body')
    setTimeout(() => setIsLoading(false), 12000)
  }, [])



  // useScrollSnap({ ref: container, duration: 50, delay: 30 });
  return (

    <div ref={container} className="App snaps-inline">
      {!isLoading ?

        <>
          <IronMan text={messageText} setText={setMessageText} />
          <ParcticleBackground />

          <Header isOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
          <About />
          <Tech />
          <Portfolio />
          <Contact />
          <Footer />


        </>
        : <PreLoader />


      }


    </div>

  )
}

export default App;
