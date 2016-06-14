import React,{PropTypes} from 'react'

import styles from './Right.css'
import cx from 'classnames'

import SvgIcon from 'SvgIcon'
import svgIcons from './svgIcons.js'

import messenger from 'web.Messenger'
import ROUTES from 'web.Config'
import {withRouter} from 'react-router'
import Auth from 'Auth'

class Right extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {showState} = this.props
        let classes = cx(styles.right,{[styles.hide]:showState!=1})
        return (
            <div className={classes}>
                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.emptyStar}/>
                        <div>{'收藏名片'}</div>
                    </div>
                </div>

                <div className={styles.itemWrap}>
                    <div className={styles.item}
                        onClick={()=>{this.clickTodo()}}>
                        <SvgIcon {...svgIcons.exchangeCard}/>
                        <div>{'交换名片'}</div>
                    </div>
                </div>

                <div className={styles.itemWrap}>
                    <div className={styles.item}
                        onClick={()=>{this.clickTodo()}}>
                        <SvgIcon {...svgIcons.cantacts}/>
                        <div>{'保存通讯录'}</div>
                    </div>
                </div>

                <div className={styles.itemWrap}>
                    <div className={styles.item}
                        onClick={()=>{this.clickTodo()}}>
                        <SvgIcon {...svgIcons.share}/>
                        <div>{'分享朋友'}</div>
                    </div>
                </div>

                <div className={styles.itemWrap}>
                    <div className={styles.item}
                        onClick={()=>{this.clickTodo()}}>
                        <SvgIcon {...svgIcons.mobileDesktop}/>
                        <div>{'手机桌面'}</div>
                    </div>
                </div>

                <div className={styles.itemWrap}>
                    <div
                        className={styles.item}
                        onClick={()=>{this.clickRegister()}}>
                        <SvgIcon {...svgIcons.createCard}/>
                        <div>{'创建名片'}</div>
                    </div>
                </div>

                <div className={styles.itemWrap}>
                    <div className={styles.item}>
                        <SvgIcon {...svgIcons.help}/>
                        <div>{'帮助'}</div>
                    </div>
                </div>
            </div>
        )
    }
    clickTodo=()=>{
        messenger.showMsg({
            msg:'该功能待开放'
        })
    }
    clickRegister=()=>{
        Auth.logoutServer(
            ()=>{this.props.router.push(ROUTES.register)}
        )
    }
}

Right.propTypes={
    showState:PropTypes.number.isRequired
}

module.exports=withRouter(Right)
