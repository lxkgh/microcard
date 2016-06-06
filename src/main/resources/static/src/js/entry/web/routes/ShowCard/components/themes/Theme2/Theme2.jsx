import React from 'react'

import styles from './Theme2.css'
import backgroundImg from './theme2.jpg'

import Header from './components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

import SvgIcon from 'SvgIcon'
import icons from './icons.js'

class Theme2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.theme}
                style={{backgroundImage:`url(${backgroundImg})`}}>
                <div className={styles.body}>
                    <Header/>
                    <div className={styles.infos}>

                        <div className={styles.contacts}>
                            <div className={styles.item}>
                                <SvgIcon {...icons.telPhone}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {'13973085358'}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.mailbox}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {'657354161@qq.com'}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.qq}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {'657354161'}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.wechat}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {'13973085358'}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.location}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {'杭州市祥园路88号'}
                                </div>
                            </div>
                        </div>

                        <div className={styles.introduce}>
                            <div className={styles.item}>
                                <div className={styles.title}>{'我的头衔'}</div>
                                <div className={styles.content}>
                                    <span>{'中脉国际'}</span>
                                    <span>{'★高级健康规划师'}</span>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>{'产品&服务'}</div>
                                <div className={styles.content}>
                                    <span>{`保健食品、保健用品：涵盖人类“吃、喝、穿、睡、用”等
                                            多方面系列生态健康产品，为人类健康生活提供全方位的呵护！
                                            中脉是业内率先提出生态养生的企业，中脉的生态养生是依托现代
                                            高科技产品，为您提供人体必需的远红外、空气、水、磁场的健康生态环境，
                                            以达到健康养生的目的，给出符合现代健康生活方式的人性化解决方案。`
                                        }</span>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>{'我的签名'}</div>
                                <div className={styles.content}>
                                    <span>{`健康是一种责任，拥有健康等同于拥有了财富。中脉“生态家”
                                            致力于让每个家庭在拥有健康的同时拥有财富！`
                                        }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
module.exports = Theme2
