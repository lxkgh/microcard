import React,{PropTypes} from 'react'

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
        const {animation} = this.props
        return (
            <div className={cx(styles.header,styles['flex-center'],
                animation?styles.animation:styles.animationHide)}>
                <div className={cx(styles.iconWrap,styles['flex-center'])}>
                    <div className={cx(styles.ring3,styles['flex-center'],
                        animation?null:styles.animation)}>
                        <div className={cx(styles.ring2,styles['flex-center'],
                            animation?null:styles.animation)}>
                            <div className={cx(styles.ring1,styles['flex-center'])}>
                                <div className={styles.headerIcon}>
                                    <img src={headerIcon}
                                        style={{width:'100%',borderRadius:'50%',zIndex:'100'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.iconWrap}>
                    <div className={cx(styles.svgIconWrap,
                            animation?styles.animation:styles.animationHide)}>
                        <div className={styles.svgIcon1}>
                            <SvgIcon {...icons.message}
                                className={cx(animation?styles.animation:styles.animationHide)}/>
                        </div>
                        <div className={styles.svgIcon2}>
                            <SvgIcon {...icons.night}
                                className={cx(animation?styles.animation:styles.animationHide)}/>
                        </div>
                        <div className={styles.svgIcon3}>
                            <SvgIcon {...icons.cases}
                                className={cx(animation?styles.animation:styles.animationHide)}/>
                        </div>
                        <div className={styles.svgIcon4}>
                            <SvgIcon {...icons.video}
                                className={cx(animation?styles.animation:styles.animationHide)}/>
                        </div>
                        <div className={styles.svgIcon5}>
                            <SvgIcon {...icons.home}
                                className={cx(animation?styles.animation:styles.animationHide)}/>
                        </div>
                        <div className={styles.svgIcon6}>
                            <SvgIcon {...icons.location}
                                className={cx(animation?styles.animation:styles.animationHide)}/>
                        </div>
                        <div className={cx(styles.line1,
                                animation?styles.animation:styles.animationHide)}>
                            <img src={line1} />
                        </div>
                        <div className={cx(styles.line2,
                            animation?styles.animation:styles.animationHide)}>
                            <img src={line2} />
                        </div>
                        <div className={cx(styles.line3,
                            animation?styles.animation:styles.animationHide)}>
                            <img src={line3} />
                        </div>
                        <div className={cx(styles.line4,
                            animation?styles.animation:styles.animationHide)}>
                            <img src={line4} />
                        </div>
                        <div className={cx(styles.line5,
                            animation?styles.animation:styles.animationHide)}>
                            <img src={line5} />
                        </div>
                    </div>
                </div>
                <div className={styles.iconWrap}>
                    <div className={cx(styles.slide,
                            animation?styles.animation:styles.animationHide)}>
                        <img src={slide} />
                    </div>
                </div>
            </div>
        )
    }
}
Header.defaultProps={
    animation:true
}
Header.propTypes={
    animation:PropTypes.bool
}
module.exports = Header
