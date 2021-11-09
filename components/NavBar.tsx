import React, { useEffect, useState } from 'react'
import style from './NavBar.module.sass'

const NavBar = () => {
    const [color, setColor] = useState("white");

    const menus = [
        {name: 'Home', href: "#home-scroll"},
        {name: 'About', href: "#about-scroll"},
        {name: 'Skills', href: "#skill-scroll"},
        {name: 'Projects', href: "#project-scroll"},
        {name: 'Contact', href: "#contact-scroll"},
    ]
    var about: any;
    var skill : any;
    var project : any;
    var contact : any;

    const scroll = () => {


        if(scrollY <= about?.offsetTop - 40){
            setColor("white")
            return;
        }
        if(scrollY >= about?.offsetTop - 20 && scrollY < skill?.offsetTop - 20){
            setColor("black")
            return;
        }
        if(scrollY >= skill?.offsetTop - 20 && scrollY < project?.offsetTop - 20){
            setColor("white")
            return;
        }
        if(scrollY >= project?.offsetTop - 20 && scrollY < contact?.offsetTop - 20){
            setColor("black")
            return;
        }
        if(scrollY >= contact?.offsetTop - 20 && scrollY < contact?.offsetTop + 180){
            setColor("white")
            return;
        }
        if(scrollY >= contact?.offsetTop + 180){
            setColor("black")
            return;
        }


    }

    useEffect(() => {
        about = document.getElementById("About_container__1mZ_s")
        skill = document.getElementById("Skill_container__127JI")
        project = document.getElementById("Project_container__1xfoh")
        contact = document.getElementById("Contact_container__NM1jh")

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        }
    }, [])

    return (
        <div id={style['container']} style={{color: color}}>
            {menus.map((item) => (
                <a href={item.href} key={item.name}>
                    <span className={style['choice']} >
                            {item.name}
                    </span>
                </a>
            ))}
        </div>
    )
}

export default NavBar
