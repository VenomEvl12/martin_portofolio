import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import style from './Skill.module.sass'

const Skill = () => {
    const imgs = [
        {title: 'HTML', src: 'html.png', delay: 0 },
        {title: 'Sass', src: 'sass.png', delay: 100 },
        {title: 'JavaScript', src: 'js.png', delay: 200},
        {title: 'React', src: 'react.png', delay: 300 },
        {title: 'Angular', src: 'angular.png', delay: 400 },
        {title: 'ASP.NET', src: 'asp.png', delay: 500 },
        {title: 'Java', src: 'java.png', delay: 600 },
        {title: 'C/C++', src: 'C.png', delay: 700 },
        {title: 'Python', src: 'python.png', delay: 800 },
        {title: 'Android', src: 'android_studio.png', delay: 900},
        {title: 'Unity', src: 'unity.png', delay: 1000 },
    ]
    return (
        <div id={style['container']}>
             <div className={style['parallax']}>
                 <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
                    <div className={style['title']}>
                        Coding Skills
                    </div>
                 </ScrollAnimation>
                 <div id={style['icon-container']}>
                     {imgs.map((item) => (
                         <ScrollAnimation animateIn="bounceIn" delay={item.delay} animateOnce={true} key={item.title}>
                            <div className={style['icon']}>
                                <img src={'assets/icon/' + item.src}/>
                                <h3>{item.title}</h3>
                            </div>
                         </ScrollAnimation>
                     ))}
                 </div>
             </div>
        </div>
    )
}

export default Skill
