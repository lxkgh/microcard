import React from 'react'
import ReactDOM from 'react-dom'

import './admin.css'
import 'css.Common'

import LeftNav from './component/leftnav/leftnav.jsx'
import User from './user/user.jsx'


const styles={
    adminAPP:{
        height:'100%',
        width:'100%'
    }
}

class AdminAPP extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.adminAPP} className="flexbox">
                <LeftNav/>
                <User />
            </div>
        )
    }
}
ReactDOM.render(
    <AdminAPP />,
    document.getElementById('common-body')
)
