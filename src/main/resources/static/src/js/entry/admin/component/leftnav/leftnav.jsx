import React from 'react'

import { Link } from 'react-router'

import SideNav from 'admin.SideNav'
import NavItem from 'admin.NavItem'

class LeftNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SideNav>
                <NavItem><Link to="users">用户管理</Link></NavItem>
                <NavItem><Link to="images">图片管理</Link></NavItem>
            </SideNav>
        )
    }
}
export default LeftNav
