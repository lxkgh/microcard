import React from 'react'

import { Link } from 'react-router'

import SideNav from 'admin.SideNav'
import NavItem from 'admin.NavItem'

import styles from './leftnav.css'

const ACTIVE={
    color: '#23527c',
    textDecoration: 'underline'
}

class LeftNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SideNav>
                <NavItem><Link to="users" className={styles.link}
                    activeStyle={ACTIVE}>用户管理</Link></NavItem>
                <NavItem><Link to="images/background"
                    className={styles.link} activeStyle={ACTIVE}>背景图片管理</Link></NavItem>
                <NavItem><Link to="images/icon" className={styles.link}
                    activeStyle={ACTIVE}>图标管理</Link></NavItem>
            </SideNav>
        )
    }
}
export default LeftNav
