import React from 'react'

import styles from './Footer.css'

import SvgIcon from 'SvgIcon'
import svgIcons from 'web.ShowCardIcons'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.emptyTelPhone}/>
                    </div>
                </div>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.location}/>
                    </div>
                </div>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.plus}/>
                    </div>
                </div>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.shopping}/>
                    </div>
                </div>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.link}/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Footer
