import React from 'react'
import ReactDOM from 'react-dom'

import { browserHistory, Router, Route} from 'react-router'

import './admin.css'
import 'css.Common'

import LeftNav from './component/leftnav/leftnav.jsx'
import Users from './users/users.jsx'
import Images from './images/images.jsx'

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
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/admin/home" component={AdminAPP}>
            <Route path="users" component={Users} />
            <Route path="images" component={Images} />
        </Route>
    </Router>
),document.getElementById('common-body'))
