import React from 'react'
import style from './NavBar.module.sass'

const NavBar = () => {
    const menus = ['Home', 'About', 'Skill', 'Project', 'Contact']

    return (
        <div id={style['container']}>
            {menus.map((item) => (
                <span className={style['choice']} key={item}>
                    {item}
                </span>
            ))}
        </div>
    )
}

export default NavBar
