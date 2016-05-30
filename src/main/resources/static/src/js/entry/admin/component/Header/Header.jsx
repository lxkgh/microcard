import React from 'react'

import styles from './Header.css'

import {withRouter} from 'react-router'
import Auth from 'Auth'
import ROUTES from 'web.Config'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.item} onClick={this.logout}>
                    {'退出'}
                </div>
            </div>
        )
    }
    logout=()=>{
        Auth.logoutServer(()=>{
            this.props.router.push(ROUTES.login)
        })
    }
}
module.exports=withRouter(Header)
