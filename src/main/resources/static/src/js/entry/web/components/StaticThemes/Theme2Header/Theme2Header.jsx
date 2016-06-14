import React,{PropTypes} from 'react'

import styles from './theme2Header.css'
import headerIcon from './defaultPortait.png'

import cx from 'classnames'
import bgimg from './bgimg.png'
import SvgIcon from 'SvgIcon'
import line1 from './line01.png'
import line2 from './line02.png'
import line3 from './line03.png'
import line4 from './line04.png'
import line5 from './line05.png'
import slide from './ic_slide.png'
class Theme2Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {clickSvg,currentThemeConfig,commomIconStyle}=this.props
        return (
        <div className={styles.wrap}>
            <img src={bgimg}
                style={{width:'100%',height:'100%',position:'absolute'}}
            />
            <div className={cx(styles.header,styles['flex-center'])}>
                <div className={cx(styles.iconWrap,styles['flex-center'])}>
                    <div className={cx(styles.ring3,styles['flex-center'])}>
                        <div className={cx(styles.ring2,styles['flex-center'])}>
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
                    <div className={cx(styles.svgIconWrap)}>
                        <div
                            className={styles.svgIcon1}
                            onClick={() => clickSvg('Svg1')}
                        >
                            <SvgIcon
                                paths={[currentThemeConfig.Svg1.paths]}
                                {...commomIconStyle}
                            />
                        <div className={styles.SvgTitle}>
                                {currentThemeConfig.Svg1.title}
                            </div>
                        </div>
                        <div onClick={() => clickSvg('Svg2')}
                            className={styles.svgIcon2}
                        >
                            <SvgIcon
                                paths={[currentThemeConfig.Svg2.paths]}
                                {...commomIconStyle}
                            />
                            <div className={styles.SvgTitle}>
                                {currentThemeConfig.Svg2.title}
                            </div>
                        </div>
                        <div
                            className={styles.svgIcon3}
                            onClick={() => clickSvg('Svg3')}
                        >
                            <SvgIcon
                                paths={[currentThemeConfig.Svg3.paths]}
                                {...commomIconStyle}
                            />
                            <div className={styles.SvgTitle}>
                                {currentThemeConfig.Svg3.title}
                            </div>
                        </div>
                        <div
                            className={styles.svgIcon4}
                            onClick={() => clickSvg('Svg4')}
                        >
                            <SvgIcon
                                {...commomIconStyle}
                                paths={[currentThemeConfig.Svg4.paths]}
                            />
                            <div className={styles.SvgTitle}>
                                {currentThemeConfig.Svg4.title}
                            </div>
                        </div>
                        <div
                            className={styles.svgIcon5}
                            onClick={() => clickSvg('Svg5')}
                        >
                            <SvgIcon
                                paths={[currentThemeConfig.Svg5.paths]}
                                {...commomIconStyle}
                            />
                            <div className={styles.SvgTitle}>
                                {currentThemeConfig.Svg5.title}
                            </div>
                        </div>
                        <div
                            className={styles.svgIcon6}
                            onClick={() => clickSvg('Svg6')}
                        >
                            <SvgIcon
                                paths={[currentThemeConfig.Svg6.paths]}
                                {...commomIconStyle}
                            />
                            <div className={styles.SvgTitle}>
                                {currentThemeConfig.Svg6.title}
                            </div>
                        </div>
                        <div className={cx(styles.line1)}>
                            <img src={line1} />
                        </div>
                        <div className={cx(styles.line2)}>
                            <img src={line2} />
                        </div>
                        <div className={cx(styles.line3)}>
                            <img src={line3} />
                        </div>
                        <div className={cx(styles.line4)}>
                            <img src={line4} />
                        </div>
                        <div className={cx(styles.line5)}>
                            <img src={line5} />
                        </div>
                    </div>
                </div>
                <div className={styles.iconWrap}>
                    <div className={cx(styles.slide)}>
                        <img src={slide} />
                    </div>
                </div>
            </div>
            {this.props.children}
        </div>
        )
    }
}
Theme2Header.defaultProps = {
    website1:'www.bing.com',
    Svg1Title:'微信'
}
Theme2Header.propTypes = {
    website1:PropTypes.string,
    clickSvg:PropTypes.func,
    Svg1Title:PropTypes.string,
    currentThemeConfig:PropTypes.object,
    currentTheme:PropTypes.number,
    commomIconStyle:PropTypes.object
}
module.exports = Theme2Header
