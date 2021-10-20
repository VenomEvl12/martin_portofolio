import React from 'react'
import style from './ProjectCard.module.sass'

const ProjectCard = () => {
    return (
        <div className={style['card-container']}>
            <div>
                <img src='/assets/Kambing.jpg'/>
            </div>
            <div className={style['fade-container']}>
                <div className={style['title']}>
                    Title
                </div>
                <div className={style['description']}>
                    Lorem Lorem Lorem Lorem Lorem Lorem
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
