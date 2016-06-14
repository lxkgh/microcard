import React from 'react'

import defaultPortait from '../../../themes/defaultPortait.png'
import styles from './Logged.css'
import SvgIcon from 'SvgIcon'
import svgIcons from './svgIcons.js'
import {withRouter} from 'react-router'
import ROUTES,{Prefixs} from 'web.Config'
import Auth from 'Auth'
import request from 'superagent'
import messenger from 'web.Messenger'

class Logged extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            userCard:{
                userIcon:{
                    path:''
                }
            }
        }
    }
    componentWillMount() {
        this.getUserCard(Auth.getUserId())
    }
    render() {
        const {userCard} = this.state
        const userInfo = {
            name:userCard?userCard.name:'',
            userIcon:userCard.userIcon?userCard.userIcon.path:defaultPortait
        }
        return (
            <div className={styles.logged}>
                <div className={styles.header}>
                    <div className={styles.userIcon}>
                        <img width="50" height="50" src = {userInfo.userIcon}
                            style={{borderRadius:'25px'}}/>
                    </div>
                    <div style={{color:'#c5c9d2',fontSize:'1.8rem',paddingLeft:'10px'}}>
                        {userInfo.name}
                    </div>
                    <div className={styles.flex}/>
                    <div className={styles.message}>
                        <SvgIcon {...svgIcons.message}/>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.item} onClick={this.handleClickMyCard}>
                        <SvgIcon {...svgIcons.mycard} />
                        <div>{'我的名片'}</div>
                    </div>
                    <div className={styles.item} onClick={this.handleClickEditCard}>
                        <SvgIcon {...svgIcons.editcard}/>
                        <div>{'编辑名片'}</div>
                    </div>
                    <div
                        className={styles.item}
                        onClick={this.handleClickCantacts}>
                        <SvgIcon {...svgIcons.contacts}/>
                        <div>{'通讯录'}</div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.flex}/>
                    <div className={styles.exit} onClick={this.handleClickExit}>
                        <SvgIcon {...svgIcons.exit} />
                        <div>{'退出'}</div>
                    </div>
                </div>
            </div>
        )
    }
    handleClickMyCard=()=>{
        this.props.router.push(ROUTES.mycard)
    }
    handleClickEditCard=()=>{
        this.props.router.push(ROUTES.editcard)
    }
    handleClickCantacts=()=>{
        this.props.router.push(ROUTES.addressbook)
    }
    getUserCard=(userId)=>{
        request.get(`${Prefixs.usercard}?userId=${userId}`)
        .then((res)=>{
            const data = JSON.parse(res.text)
            if (data.success) {
                this.setState({userCard:data.data})
            }else {
                messenger.showMsg({
                    msg:'未登录'
                })
            }
        })
    }
    handleClickExit=()=>{
        Auth.logoutServer(
            ()=>{this.props.router.push(ROUTES.login)}
        )
    }
}
module.exports = withRouter(Logged)
