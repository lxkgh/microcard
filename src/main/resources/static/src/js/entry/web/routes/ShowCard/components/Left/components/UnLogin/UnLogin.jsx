import React from 'react'

import {withRouter} from 'react-router'

import styles from './UnLogin.css'
import SvgIcon from 'SvgIcon'
import svgIcons from './svgIcons.js'
import ROUTES from 'web.Config'

class UnLogin extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.unLogin}>
                <div className={styles.toLog}>
                    <div style={{textAlign:'center'}} onClick={this.clickToLogin}>
                        <SvgIcon {...svgIcons.login}/>
                        <div style={{marginTop:'18px'}}>{'点击登录'}</div>
                    </div>
                </div>
                <div className={styles.toRegiste}>
                    <div style={{padding: '30px 0'}}>
                        <div className={styles.msg}>{'还没有丰享名片账号?'}</div>
                        <div className={styles.linkButton} onClick={this.clickToRegister}>
                            {'马上创建名片'}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    clickToLogin=()=>{
        this.props.router.push(ROUTES.login)
    }
    clickToRegister=()=>{
        this.props.router.push(ROUTES.register)
    }
}

module.exports = withRouter(UnLogin)
