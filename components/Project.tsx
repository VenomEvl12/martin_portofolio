import React from 'react'
import style from './Project.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import Card from './Card'

const Project = () => {
    const datas = [
        { url: 'assets/projects/maswus.png', title: 'MasWus', description: 'It is PSD H3S1 case for Core Training 21-1. built with asp.net. it is a simple forum website with CRUD in it, inspired by Kaskus.'},
        { url: 'assets/projects/youRJube.png', title: 'youRJube', description: 'It is website from Test Progressive Assistant (TPA). Built with Angular (Front End), Golang (Backend), Postgre(Database), and Firebase(Database). we tasked to create a website similar to Youtube but simpler.'},
        { url: 'assets/projects/CattleShopIndonesia.png', title: 'Cattle Shop Indonesia', description: 'It is Mobile App Development project case for students of Bina Nusantara, built with Android Studio, It is a simple review app, with fetch API, CRUD, and google map. Inpired by line today'},
        { url: 'assets/projects/Laravel_Project.png', title: 'MbWek Center', description: 'It is Web Programing project case for students of Bina Nusantara, built with Laravel 8. It is a simple purchase shop with CRUD in it'},
        { url: 'assets/projects/Knight_Vow.png', title: 'Knight Vow', description: 'It is my first time create a game, built with Unity, It is Test Progressive Assistant (TPA) for me to develop myself in 3D game development. It is a simple 3D RPG game inpired by dark souls'},
        { url: 'assets/projects/SmallFantasy.png', title: 'Small Fantasy', description: "It is simple 2D combat game, created with Unity for Game Programming's project assigment."},
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
