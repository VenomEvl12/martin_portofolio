import React, { useEffect, useRef } from 'react'
import style from './About.module.sass'

const About = (scrollY: any) => {

    var aboutContainer = useRef(null);
    var aboutTitle = useRef(null);

    useEffect(() =>{
        var aboutPlay = false;
        if(scrollY > 560 && !aboutPlay){
        }
        
    })

    return (
        <div id={style['container']} ref={aboutContainer}>
            <div className={style['title']} ref={aboutTitle}>
                About
            </div>
            <div id={style['container-description']}>
                <div className={style['description']}>
                    <div className={style['title-name']}>
                        Martin Wijaya
                    </div>
                    <div className={style['biography']}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                    </div>
                </div>
                <div className={style['my-image']}>
                    <img src='/assets/Kambing.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default About
