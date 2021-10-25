import React from 'react'
import style from './NavBar.module.sass'

const NavBar = () => {
    const menus = [
        {name: 'Home', href: "#home-scroll"},
        {name: 'About', href: "#about-scroll"},
        {name: 'Skills', href: "#skill-scroll"},
        {name: 'Projects', href: "#project-scroll"},
        {name: 'Contact', href: "#contact-scroll"},
    ]

    return (
        <div id={style['container']}>
            {menus.map((item) => (
                <a href={item.href}>
                    <span className={style['choice']} key={item.name}>
                            {item.name}
                    </span>
                </a>
            ))}
        </div>
    )
}

export default NavBar
