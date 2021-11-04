import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Project from '../components/Project'
import Skill from '../components/Skill'
import style from '../styles/home.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css";
import Typist from 'react-typist';
import "react-typist/dist/Typist.css"

const Home: NextPage = () => {

  return (
    <div id={style['container']}>
      <NavBar></NavBar>
      <div id="home-scroll"></div>
      <div className={style['parallax']}>
            <div id={style['home-container']}>
            <ScrollAnimation animateIn="bounceInRight" delay={300} animateOnce={true}>
              <div id={style['introduction-container']}>
                <div className={style['introduction-hello']}>
                  Hello, My Name is
                </div>
                <div className={style['introduction-name']}>
                  <Typist startDelay={1500}>
                    Martin Wijaya
                  </Typist>
                </div>
                <div className={style['introduction-hello']}>
                  MW20-1
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" delay={300} animateOnce={true}>
              <div id={style['logo-container']}>
                <div id={style['main-logo']} >
                  <img src="/assets/MW-Putih.png"/>
                </div>
                <div id={style['main-logo-outline']} >
                  <img src="/assets/circle.png"/>
                </div>
              </div>
            </ScrollAnimation>
            </div>
      </div>
      <div>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
      </div>
      {/* Free Broll by <a target="_blank" href="http://www.videezy.com">Videezy</a> */}
    </div>
  )
}

export default Home
