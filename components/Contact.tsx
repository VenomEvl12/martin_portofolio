import React from 'react'
import style from './Contact.module.sass'
import ScrollAnimation from 'react-animate-on-scroll'
import emailjs from 'emailjs-com'

const Contact = () => {

    function sendEmail(e : any){
        e.preventDefault();

        emailjs.sendForm(
            'service_50md21b',
            'template_f2q06eq',
            e.target,
            'user_49Jjd1R195VkDWHdYoO5o'
            ).then(res => {
                var doc : any = document.getElementById("form");
                doc?.reset();
                alert("Send message success !")
            }).catch(err => {
                alert("Failed send message !")
            })

    }

    return (
        <div id={style['container']}>
            <div id="contact-scroll"></div>
            <video autoPlay muted loop id={style['video-background']}>
                <source src="/assets/galaxy.mp4" type="video/mp4"/>
            </video>
            <div className={style['form-container']}>
                <div id={style['content-container']}>
                    <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
                        <div className={style['title']}>
                            <h2>Contact Me</h2>
                        </div>
                        <div id={style['contact-container']}>
                            <form action="" id={style['form']} onSubmit={sendEmail}>
                                <label>
                                        Full Name :
                                        <input type="text" name="name" required/>
                                </label>
                                <label>
                                    Email :
                                    <input type="email" name="user_email" required/>
                                </label>
                                <label>
                                    Message :
                                    <textarea rows={8} name="description" required></textarea>
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Contact
