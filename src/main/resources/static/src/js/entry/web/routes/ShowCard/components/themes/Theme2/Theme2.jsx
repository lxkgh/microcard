import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

import styles from './Theme2.css'
import backgroundImg from './theme2.jpg'

import Header from './components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

import SvgIcon from 'SvgIcon'
import icons from './icons.js'

class Theme2 extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            animation:true
        }
    }
    componentDidMount() {
        this.body = ReactDOM.findDOMNode(this.refs['body'])
    }
    render() {
        const {animation} = this.state
        const {userCard} = this.props
        return (
            <div className={styles.theme}
                style={{backgroundImage:`url(${backgroundImg})`}}>
                <div className={styles.body}
                    ref="body"
                    onTouchStart={this.onTouchStart}
                    onTouchMove={this.onTouchMove}
                    onTouchEnd={this.onTouchEnd}>
                    <Header animation={animation}/>
                    <div className={styles.infos}>
                        <a href="#infos"/>
                        <div className={styles.contacts}>
                            <div className={styles.item}>
                                <SvgIcon {...icons.telPhone}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {userCard.phone}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.mailbox}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {userCard.email}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.qq}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {userCard.qq}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.wechat}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {userCard.weChat}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <SvgIcon {...icons.location}/>
                                <div className={styles.flex}></div>
                                <div className={styles.content}>
                                    {userCard.address}
                                </div>
                            </div>
                        </div>
                        <div className={styles.introduce}>
                            <div className={styles.item}>
                                <div className={styles.title}>{'我的头衔'}</div>
                                <div className={styles.content}>
                                    <span>{userCard.company}</span>
                                    <span>{userCard.job}</span>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>{'我的签名'}</div>
                                <div className={styles.content}>
                                    <span>{userCard.signature}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    onTouchStart=(e)=>{
        this.start = e.currentTarget.scrollTop
    }
    onTouchMove=(e)=>{
        const {animation} = this.state
        const scrollTop=e.currentTarget.scrollTop
        const slide=scrollTop-this.start
        if (slide < 0  && !animation) {
            this.setState({
                animation:true
            })
            this.body.scrollTop=0
            return
        }
        if (slide > 0  && animation) {
            this.setState({
                animation:false
            })
            this.body.scrollTop=0
            return
        }
    }
    onTouchEnd = () => {
    }
}
Theme2.defaultProps={
    userCard:{}
}
Theme2.propTypes = {
    userCard:PropTypes.object
}

module.exports = Theme2
// <div className={styles.item}>
//     <div className={styles.title}>{'产品&服务'}</div>
//     <div className={styles.content}>
//         <span>{`保健食品、保健用品：涵盖人类“吃、喝、穿、睡、用”等
//                 多方面系列生态健康产品，为人类健康生活提供全方位的呵护！
//                 中脉是业内率先提出生态养生的企业，中脉的生态养生是依托现代
//                 高科技产品，为您提供人体必需的远红外、空气、水、磁场的健康生态环境，
//                 以达到健康养生的目的，给出符合现代健康生活方式的人性化解决方案。`
//             }</span>
//     </div>
// </div>
