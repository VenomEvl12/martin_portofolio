import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Project from '../components/Project'
import Skill from '../components/Skill'
import style from '../styles/home.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css";

const Home: NextPage = () => {

  return (
    <div id={style['container']}>
      <NavBar></NavBar>
      <div className={style['parallax']}>
            <div id={style['home-container']}>
            <ScrollAnimation animateIn="bounceInRight" delay={300} animateOnce={true}>
              <div id={style['introduction-container']}>
                <div className={style['introduction-hello']}>
                  Hello, My Name is
                </div>
                <div className={style['introduction-name']}>
                  Martin Wijaya
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" delay={300} animateOnce={true}>
              <div id={style['logo-container']}>
                <div>
                  <img id={style['main-logo']} src="/assets/MW-Putih.png"></img>
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
