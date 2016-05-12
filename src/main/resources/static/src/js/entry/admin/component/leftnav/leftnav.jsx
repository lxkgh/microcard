import React from 'react'

import SideNav from 'admin.SideNav'
import NavItem from 'admin.NavItem'

class LeftNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SideNav>
                <NavItem>用户管理</NavItem>
            </SideNav>
        )
    }
}
export default LeftNav
