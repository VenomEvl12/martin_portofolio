import React from 'react'
import style from './Contact.module.sass'

const Contact = () => {
    return (
        <div id={style['container']}>
            <div className={style['title']}>
                <h2>Contact Me</h2>
            </div>
            <div id={style['contact-container']}>
                <form action="">
                    <label>
                            Full Name :
                            <input type="text"/>
                    </label>
                    <label>
                        Email :
                        <input type="email"/>
                    </label>
                    <label>
                        Message :
                        <textarea rows={8}></textarea>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
