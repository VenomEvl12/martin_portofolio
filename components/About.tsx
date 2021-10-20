import style from './About.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'


const About = () => {
    const socialMedias = [
        {key: 'linkedin', src: 'assets/about-icon/linkedin.png', href:'https://www.linkedin.com/in/martin-w-122916a8/'},
        {key: 'github', src: 'assets/about-icon/github.png', href:'https://github.com/VenomEvl12'}
    ]

    return (
        <div id={style['container']}>
            <ScrollAnimation animateIn="flipInX" delay={300} animateOnce={true}>
                <div className={style['title']}>
                    About
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" delay={800} animateOnce={true}>
                <div id={style['container-description']}>
                    <div className={style['description']}>
                        <div className={style['title-name']}>
                            Martin Wijaya
                        </div>
                        <div className={style['biography']}>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
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
