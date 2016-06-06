import React from 'react'

import styles from './Header.css'
import headerIcon from './header.jpeg'

import cx from 'classnames'

import SvgIcon from 'SvgIcon'
import icons from './icons.js'
import line1 from './line01.png'
import line2 from './line02.png'
import line3 from './line03.png'
import line4 from './line04.png'
import line5 from './line05.png'
import slide from './ic_slide.png'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={cx(styles.header,styles['flex-center'])}>
                <div className={cx(styles.iconWrap,styles['flex-center'])}>
                    <div className={cx(styles.ring3,styles['flex-center'])}>
                        <div className={cx(styles.ring2,styles['flex-center'])}>
                            <div className={cx(styles.ring1,styles['flex-center'])}>
                                <div className={styles.headerIcon}>
                                    <img src={headerIcon}
                                        style={{width:'100%',borderRadius:'50%'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.iconWrap}>
                    <div className={styles.svgIconWrap}>
                        <div className={styles.svgIcon1}>
                            <SvgIcon {...icons.message}/>
                        </div>
                        <div className={styles.svgIcon2}>
                            <SvgIcon {...icons.night}/>
                        </div>
                        <div className={styles.svgIcon3}>
                            <SvgIcon {...icons.cases}/>
                        </div>
                        <div className={styles.svgIcon4}>
                            <SvgIcon {...icons.video}/>
                        </div>
                        <div className={styles.svgIcon5}>
                            <SvgIcon {...icons.home}/>
                        </div>
                        <div className={styles.svgIcon6}>
                            <SvgIcon {...icons.location}/>
                        </div>
                        <div className={styles.line1}>
                            <img src={line1} />
                        </div>
                        <div className={styles.line2}>
                            <img src={line2} />
                        </div>
                        <div className={styles.line3}>
                            <img src={line3} />
                        </div>
                        <div className={styles.line4}>
                            <img src={line4} />
                        </div>
                        <div className={styles.line5}>
                            <img src={line5} />
                        </div>
                    </div>
                </div>
                <div className={styles.iconWrap}>
                    <div className={styles.slide}>
                        <img src={slide} />
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Header
