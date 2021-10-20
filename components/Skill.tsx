import React from 'react'
import style from './Skill.module.sass'

const Skill = () => {
    const imgs = [
        {title: 'HTML', src: 'html.png' },
        {title: 'Sass', src: 'sass.png' },
        {title: 'JavaScript', src: 'js.png'},
        {title: 'React', src: 'react.png'},
        {title: 'Angular', src: 'angular.png'},
        {title: 'ASP.NET', src: 'asp.png'},
        {title: 'Java', src: 'java.png'},
        {title: 'C/C++', src: 'C.png'},
        {title: 'Python', src: 'python.png'},
        {title: 'Android', src: 'android_studio.png'},
        {title: 'Unity', src: 'unity.png'},
    ]
    return (
        <div id={style['container']}>
             <div className={style['parallax']}>
                 <div className={style['title']}>
                    Coding Skills
                 </div>
                 <div id={style['icon-container']}>
                     {imgs.map((item) => (
                        <div className={style['icon']} key={item.title}>
                            <img src={'assets/icon/' + item.src}/>
                            <h3>{item.title}</h3>
                        </div>
                     ))}
                 </div>
             </div>
        </div>
    )
}

export default Skill
