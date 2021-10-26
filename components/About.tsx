import style from './About.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import { useEffect } from 'react'


const About = () => {
    const socialMedias = [
        {key: 'linkedin', src: 'assets/about-icon/linkedin.png', href:'https://www.linkedin.com/in/martin-w-122916a8/'},
        {key: 'github', src: 'assets/about-icon/github.png', href:'https://github.com/VenomEvl12'},
        {key: 'line', src: 'assets/about-icon/line.png', href:'https://github.com/VenomEvl12'},
        {key: 'instagram', src: 'assets/about-icon/instagram.png', href:'https://github.com/VenomEvl12'},
    ]

    return (
        <div id={style['container']}>
            <div id="about-scroll"></div>
            <ScrollAnimation animateIn="flipInX" delay={300} animateOnce={true}>
                <div className={style['title']}>
                    About
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" delay={800} animateOnce={true}>
                <div id={style['container-description']}>
                    <div className={style['description']}>
                        <div className={style['title-name']}>
                            Who Am I ?
                        </div>
                        <div className={style['biography']}>
                         Hi! My Name is Martin Wijaya. Currently I am a College Student at Bina Nusantara University, taking a major on Game Application Technology and also a full time Teaching Assistant at Software Laboratory Center, Bina Nusantara.
                        </div>
                        <div className={style['icons']}>
                            {socialMedias.map((item) => (
                                <a href={item.href} key={item.key}>
                                    <img src={item.src}/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={style['my-image']}>
                        <img src='/assets/Kambing.jpg'/>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default About
