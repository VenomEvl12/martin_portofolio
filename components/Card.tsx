import React from 'react'
import style from './Card.module.sass'

const Card = (props : any) => {
    return (
        <div className={style['card-container']}>
            <div className={style['card-box']}>
                <div className={style['front']}>
                    <img src={props.data.url}/>
                </div>
                <div className={style['back']}>
                    <div className={style['title']}>
                        {props.data.title}
                    </div>
                    <div className={style['description']}>
                        {props.data.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
