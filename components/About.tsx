import style from './About.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const About = () => {
    const socialMedias = [
        {key: 'linkedin', src: 'assets/about-icon/linkedin.png', href:'https://www.linkedin.com/in/martin-w-122916a8/'},
        {key: 'github', src: 'assets/about-icon/github.png', href:'https://github.com/VenomEvl12'},
        {key: 'line', src: 'assets/about-icon/line.png', href:'line://ti/p/nexus_12'},
        {key: 'instagram', src: 'assets/about-icon/instagram.png', href:'https://www.instagram.com/martin.wij12/'},
        {key: 'facebook', src: 'assets/about-icon/facebook.png', href:'https://www.facebook.com/martin.wijaya.904'}
    ]

    return (
        <div id={style['container']}>
            <div id="about-scroll"></div>
            <ScrollAnimation animateIn="fadeInDown" delay={300} animateOnce={true}>
                <div className={style['title']}>
                    About
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInDown" delay={800} animateOnce={true}>
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
                        <img src='/assets/foto_diri.png'/>
                    </div>
                </div>
            </ScrollAnimation>
            <div style={{marginBottom: '7rem'}}>
                <div className={style['timeline-title']}>
                    <h2>Education & Working Experience</h2>
                </div>
                <VerticalTimeline lineColor= 'rgb(200, 200, 200)'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'white', border: '1px solid rgb(200, 200, 200)'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)'}}
                        dateClassName={style['black-text']}
                        date="2019 Sep - 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} >
                        <h3 className="vertical-timeline-element-title">Bina Nusantara Student</h3>
                        <p>
                            Studying Game Application and Technology
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'white', border: '1px solid rgb(200, 200, 200)'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)'}}
                        dateClassName={style['black-text']}
                        date="2020 Feb - 2022 Feb"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} >
                        <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Software Laboratory Center Bina Nusantara</h4>
                        <p>
                            Mainly Teaching, case making, and marking various subjects for students in Computer Science Faculty
                        </p>
                        <p>
                            Participate in trainings and self-development projects such as
                        </p>
                        <p>
                            • 3D game development <br/>
                            • Desktop application <br/>
                            • Website programming <br/>
                            • Mobile apps <br/>
                            • Network <br/>
                            • and Research interest
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        </div>
    )
}

export default About
