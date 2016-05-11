import React from 'react'
import ReactDOM from 'react-dom'

import './admin.css'

import SideNav from './common/sidenav/sidenav.jsx'

class AdminAPP extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <SideNav/>
            </div>
        )
    }
}
ReactDOM.render(
    <AdminAPP />,
    document.getElementById('common-body')
)
