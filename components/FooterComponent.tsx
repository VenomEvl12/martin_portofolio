import React from 'react'
import style from './FooterComponent.module.sass'

const FooterComponent = () => {
    return (
        <div id={style['container']}>
            <div>
                This web is made using Next JS
            </div>
            <div>
                Background gif by <a href="http://www.videezy.com">Videezy</a>
            </div>
            <div>
                Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a>
            </div>
            <div>
                © 2021 Martin Wijaya. All rights reserved.
            </div>
        </div>
    )
}

export default FooterComponent
