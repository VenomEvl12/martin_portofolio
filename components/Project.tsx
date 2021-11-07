import React from 'react'
import style from './Project.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import Card from './Card'

const Project = () => {
    const datas = [
        { url: 'assets/projects/maswus.png', title: 'MasWus', description: 'it is a forum application where people can share story like Kaskus but simplified for Core Training 21-1 session case'},
        { url: 'assets/projects/youRJube.png', title: 'youRJube', description: 'a '},
        { url: 'assets/projects/CattleShopIndonesia.png', title: 'Cattle Shop Indonesia', description: 'a '},
        { url: 'assets/projects/Laravel_Project.png', title: 'MbWek Center', description: 'a'},
        { url: 'assets/projects/Knight_Vow.png', title: 'Knight Vow', description: 'a '},
        { url: 'assets/projects/SmallFantasy.png', title: 'Small Fantasy', description: 'a '},
    ]

    return (
        <div id={style['container']}>
            <div id="project-scroll"></div>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className={style['title']}>
                    Projects
                </div>
                <div className={style['cards']}>
                {datas.map((item) => (
                    <div key={item.title}>
                        <Card data={item}></Card>
                    </div>
                ))}
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Project
