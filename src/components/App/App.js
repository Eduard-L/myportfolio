
import './App.css';
import { PreLoader } from '../PreLoader/PreLoader';
import { Header } from '../Header/Header';
import { useEffect, useRef, useState } from 'react';
import { Main } from '../Main/Main';
import { About } from '../About/About'
import { Tech } from '../Tech/Tech'
import { Portfolio } from '../Portfolio/Portfolio'
import useScrollSnap from 'react-use-scroll-snap';
import { ParcticleBackground } from '../ParticleBackground/ParcticleBackground'

function App() {
  const onHoverState = {
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false
  }
  const [isLoading, setIsLoading] = useState(true)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [isHover, setIsHover] = useState(onHoverState)
  useEffect(() => {
    document.body.classList.add('.body')
    setTimeout(() => setIsLoading(false), 5000)
  }, [])


  const container = useRef()
  useScrollSnap({ ref: container, duration: 50, delay: 30 });
  return (

    <div ref={container} className="App snaps-inline">
      {!isLoading ?

        <>
          <ParcticleBackground />
          <Header isOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />

          <About />
          <Tech />
          <Portfolio isHover={isHover} setIsHover={setIsHover} />

        </>
        : <PreLoader />


      }
    </div>

  )
}

export default App;
