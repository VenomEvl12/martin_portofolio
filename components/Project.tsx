import React from 'react'
import style from './Project.module.sass'
import ProjectCard from './ProjectCard'
import ScrollAnimation from 'react-animate-on-scroll'

const Project = () => {
    return (
        <div id={style['container']}>
            <ScrollAnimation animateIn="bounceInLeft">
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
            </ScrollAnimation>
        </div>
    )
}

export default Project
