import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Project from '../components/Project'
import Skill from '../components/Skill'
import style from '../styles/home.module.sass'

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])

  return (
    <div id={style['container']}>
      <NavBar></NavBar>
      <div className={style['parallax']}>
        <div id={style['home-container']}>
            <div className={style['introduction-hello']}>
              Hello, My Name is
            </div>
            <div className={style['introduction-name']}>
              Martin Wijaya
            </div>
        </div>
      </div>
      <div>
        <About scrollY={scrollY}></About>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
      </div>
      {/* Free Broll by <a target="_blank" href="http://www.videezy.com">Videezy</a> */}
    </div>
  )
}

export default Home
