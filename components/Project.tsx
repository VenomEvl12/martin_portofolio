import React from 'react'
import style from './Project.module.sass'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div id={style['container']}>
            <div className={style['title']}>
                Projects
            </div>
            <div className={style['cards']}>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    )
}

export default Project
